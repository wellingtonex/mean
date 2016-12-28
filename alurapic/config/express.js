let express = require('express');
let app = express();
let consign = require('consign');

app.use(express.static('./public'));

consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;
