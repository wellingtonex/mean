module.exports = function(uri) {
    let mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', () => {
        console.log('Servidor conectado ao banco de dados...');    
    });

    mongoose.connection.on('error', error => {
        console.log('Erro na conexão: ' + error);    
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Desconectado do mongodb');    
    })

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Conexão fechada pelo termino da applicação.');
            process.exit(0);
        });
    })
}