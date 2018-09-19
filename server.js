'use strict';

//Application dependencies
//required things
const pg = require('pg');
const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

//application setup
const PORT = process.env.PORT;
const app = express();

//database setup
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', error => {
  console.error(error);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.redirect('/books'));

app.get('/books', (request, response) => {
  client.query('SELECT * FROM books;')
    .then( (result) => {
      response.render('index', {
        pageTitle: 'Winter Time Reading',
        books: result.rows
      });
    })
    .catch( (error) => {
      response.render('./pages/error', {error: error});
    });
});


app.get('/books/:id', (request, response) => {
  console.log('in route')
  let SQL = 'SELECT * FROM books WHERE id = $1';
  let values = [request.params.id];
  client.query(SQL, values, (err, result)=> {
    
    if(err) {
      console.log(result);
      console.error(err);
      response.redirect('/error');
    }else{
      response.render('./pages/show', {book: result.rows[0] });
    }
  });
});

app.get('*', (request, response) => {
  response.statusCode = 404;
  response.render('./pages/error', {
    error: 'BAD URL - Try again!'
  });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

