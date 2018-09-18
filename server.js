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

