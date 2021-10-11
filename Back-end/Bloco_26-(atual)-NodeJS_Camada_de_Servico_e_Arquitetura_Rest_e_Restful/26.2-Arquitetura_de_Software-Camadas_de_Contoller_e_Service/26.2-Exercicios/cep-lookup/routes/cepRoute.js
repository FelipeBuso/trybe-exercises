const route = require('express').Router();
const { getCEP, getAllCEPs, createCEP } = require('../controllers/cepController');

route.get('/:cep', getCEP);
route.get('/', getAllCEPs);
route.post('/', createCEP);

module.exports = route;