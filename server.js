'use strict';

const pg = require('pg');
const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

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

app.get('/hello', (request, response) => {
  response.render('index');
});

app.get('/books', (request, response) => {
  client.query('SELECT title, author, image_url FROM books;')
    .then( (result) => {
      response.render('index', {
        pageTitle: 'All da books',
        books: result.rows
      });
    })
    .catch(function(err) {
      console.error(err);
    });
});

app.get('*', (request, response) => {
  response.statusCode = 404;
  response.render('error', {
    error: 'BAD URL - Try again!'
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

