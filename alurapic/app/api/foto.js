let mongoose = require('mongoose');

let api = {};

let model = mongoose.model('Foto');

api.lista = (req, res) => {    
    // model.find((error, fotos) => {
    //     if(error) {
    //         res.status(500).json(error);
    //     }else {
    //         res.status(200).json(fotos);
    //     }
    // });

    model.find({})
        .then(fotos => {
            res.json(fotos);
        }, error => {
            console.log(error);
            res.status(500).json(error);
        });
}

api.buscaPorId = (req, res) => {
    model.findById(req.params.id)
        .then(foto => {
            if(!foto) {
                throw Error('Foto não encontrada.');
            }else {
                res.json(foto);
            }
        }, error => {
            console.log(error);
            res.status(500).json(error);
        })
}

api.removePorId = (req, res) => {
    model.remove({_id:req.params.id})
        .then(() => {
            res.sendStatus(204);
        }, error => {
            console.log(error);
            res.status(500).json(error);
        })
}

api.adiciona = (req, res) => {
    let foto = req.body;
    model.create(foto)
        .then(foto => {
            res.status(201).json(foto);
        }, error => {
            console.log(error);
            res.status(500).json(error);
        })
}

api.atuliza = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body)
        .then(foto => {
            res.json(foto);
        }, error => {
            console.log(error);
            res.status(500).json(error);
        })
}

module.exports = api;