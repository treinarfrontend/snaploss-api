'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco

// Carregar os Models

// Carregar as rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;