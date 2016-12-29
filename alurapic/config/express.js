let express = require('express');
let app = express();
let consign = require('consign');
let bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

module.exports = app;
