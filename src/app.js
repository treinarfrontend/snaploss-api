'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carregar os Models
const User = require('./models/user');
const Animal = require('./models/animal');

// Carregar as rotas
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const animalRoute = require('./routes/animal-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/animal', animalRoute);


module.exports = app;