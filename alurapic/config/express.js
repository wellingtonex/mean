let express = require('express');
let app = express();
let consign = require('consign');
let bodyParser = require('body-parser');

app.set('secret', 'homemavestruz');
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes/auth.js') //garante que auth vai ser a primeira rota a ser carregada em routes
    .then('routes')
    .into(app);

module.exports = app;
