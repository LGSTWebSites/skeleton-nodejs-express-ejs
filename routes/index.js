var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
}
);

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(5);
  res.json(autores.rows);
}
);

module.exports = router;