let http = require('http');
let express = require('./config/express');
require('./config/database')('localhost/alurapic');

http.createServer(express).listen(3000, function(req, res) {
    console.log('Servidor inicializado...');
});