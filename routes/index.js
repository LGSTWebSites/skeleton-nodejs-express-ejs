var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  /*const autor = {
    nome:"Ronaldo",
    sobrenome:"Nazario",
    datanascomento:"2022-04-16"
  }
  const autores = await Autor.inserir(autor);
  res.json(autores);*/
  console.log(Req.body);
}
);

router.get('/atualizar', async function(req, res, next) {
  const autor = {
    nome:"Ronaldo",
    sobrenome:"Nazario",
    datanascomento:"2022-04-16",
    id: 1
  }
  const autores = await Autor.atualizar(autor);
  res.json(autores);
}
);

router.get('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(5);
  res.json(autores);
}
);

module.exports = router;