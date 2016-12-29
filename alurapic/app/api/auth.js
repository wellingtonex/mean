let mongoose = require('mongoose');
let jwt  = require('jsonwebtoken');

module.exports = app => {

    let api = {};
    let model = mongoose.model('Usuario');

    api.autentica = (req, res) => {
        
        model.findOne({login:'wellingtonex', senha:'123'})
            .then(usuario => {
                if(!usuario) {
                    console.log('Login e senha invalidos');
                    res.sendStatus(401);
                } else {
                    console.log('Criando token...');
                    //criar token
                    let token = jwt.sign({login:usuario.login}, app.get('secret'), {
                        expiresIn:84600
                    });

                    console.log('Autenticado: token adicionado na resposta');
                    res.set('x-access-token', token); // adicionando token no cabeçalho de resposta
                    res.end(); // enviando a resposta
                }                
            }, error => {
                console.log('Error: ' + error);
                res.sendStatus(401);
            });
    };

    api.verificaToken = (req, res, next) => {
        let token = req.headers['x-access-token'];
        if(token) {
            console.log('Verificando token..');
            jwt.verify(token, app.get('secret'), (error, decoded) => {
                if(error) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                }
                req.usuario = decoded;
                next();
            });

        } else {
            console.log('Token não encontrado');
            res.sendStatus(401);
        }
    }

    return api;
}

