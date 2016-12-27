let http = require('http');

http.createServer((req, res) => {
    res.end('Hello')
    console.log('criado');
}).listen(3000, function(req, res) {
    console.log('ouvindo');
});