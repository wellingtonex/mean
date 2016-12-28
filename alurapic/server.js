let http = require('http');
let express = require('./config/express');

http.createServer(express).listen(3000, function(req, res) {
    console.log('Servidor inicializado...');
});