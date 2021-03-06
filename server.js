'use strict';

//Application dependencies
//required things
const pg = require('pg');
const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const superagent = require('superagent');

//application setup
const PORT = process.env.PORT;
const app = express();

//database setup
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', error => console.error(error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.redirect('/books'));

//new route to render add new book page
app.get('/books/new', (req, res) => res.render('pages/books/new'));

//new route to render search for book page
app.get('/searches/new', (req, res) => res.render('pages/searches/new'));

//retrieve all books and render on index
app.get('/books', getBooks);

//retrieve one 1 book by id then render on show.ejs
app.get('/books/:id', getOneBook);

//take form data to insert new book into database
app.post('/books', addBook);

app.post('/searches/show', addBook);

//new route to connect to Google books API
app.get('/searches/show', (request, response) => {
  console.log(request.query.searchBar);
  superagent.get(`https://www.googleapis.com/books/v1/volumes?q=${request.query.searchBar}`)
    .end( (err, apiResponse) => {
      console.log(apiResponse.body);

      let books = apiResponse.body.items.map(book => ({
        image_url: book.volumeInfo.imageLinks.smallThumbnail,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        isbn: book.volumeInfo.industryIdentifiers[0].identifier,
        description: book.volumeInfo.description}));

      response.render('./pages/searches/show', {books: books});
    });
});

//if bad URL entered send to error.ejs
app.get('*', badUrl);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

//helper functions
function getBooks(request, response) {
  client.query('SELECT * FROM books;')
    .then( (result) => {
      response.render('index', {
        books: result.rows
      });
    })
    .catch( (error) => {
      response.render('./pages/error', {error: error});
    });
}

function getOneBook(request, response) {
  let SQL = 'SELECT * FROM books WHERE id = $1';
  let values = [request.params.id];

  client.query(SQL, values, (err, result)=> {
    if(err) {
      console.error(err);
      response.redirect('/error');
    }else{
      response.render('./pages/books/show', {
        book: result.rows[0]});
    }
  });
}

function addBook(request, response) {
  console.log('got a post!');
  console.log(request.body);
  let SQL = 'INSERT INTO books (title, author, isbn, image_url, description) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
  let values = [
    request.body.title,
    request.body.author,
    request.body.isbn,
    request.body.image_url,
    request.body.description
  ];

  client.query(SQL, values, (err, result) => {
    if(err) {
      console.error(err);
      response.redirect('/error');
    }else{
      console.log(result);
      response.redirect(`/books/${result.rows[0].id}?added=true`);
    }
  });
}

function badUrl(request, response) {
  response.statusCode = 404;
  response.render('./pages/error', {
    error: 'BAD URL - Try again!'
  });
}