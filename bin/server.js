const express = require('express');
const http =  require('http');
const debug = require('debug');

const app = express();
const router = express.Router();


app.get('/', function(req, res, next){
    res.status(200).send({
        title: "API",
        version: "0.0.1"
    });
});

const server =  http.createServer(app);

server.listen('3000', function(){
    console.log('API Rodando');
})
