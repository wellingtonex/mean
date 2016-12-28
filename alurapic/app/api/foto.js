let api = {};

let fotos = [
            {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
            {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
        ];

api.lista = (req, res) => {    
    res.json(fotos);
}

api.buscaPorId = (req, res) => {
    let foto = fotos.find(foto => foto._id == req.params.id);
    res.json(foto);
}

api.removePorId = (req, res) => {
    fotos = fotos.filter(foto => foto._id != req.params.id);
    res.sendStatus(204);
    //que é igual a res.status(204).end();
}

module.exports = api;