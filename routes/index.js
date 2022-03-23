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
  res.json(req.body);
}
);

router.get('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(req.body);
}
);

router.get('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(5);
  res.json(req.body);
}
);

module.exports = router;