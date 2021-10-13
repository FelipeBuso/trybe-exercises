const route = require('express').Router();
const { getCEP, getAllCEPs, createCEP } = require('../controllers/cepController');
const { checkBody } = require('../middlewares/checkBody');

route.get('/:cep', getCEP);
route.get('/', getAllCEPs);
route.post('/', checkBody, createCEP);

module.exports = route;