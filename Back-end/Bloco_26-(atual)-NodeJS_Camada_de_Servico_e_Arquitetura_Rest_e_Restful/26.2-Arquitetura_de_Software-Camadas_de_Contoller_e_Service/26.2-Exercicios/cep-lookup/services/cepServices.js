const { lookupCEP, createCEP } = require('../models/cepModel');

const cepCheck = (cep) =>  {
  const regexParam = /[0-9]{5}-?\d{3}/g;
  const check = regexParam.test(cep);
  return check;
}

const formatCEP = (cep) => {
  let formatedCEP;
  if(cep.split('-').length = 2) {
    formatedCEP = `${cep.slice(0, 5)}${cep.slice(-3)}`;
  } else {
    formatedCEP = cep;
  }

  return formatedCEP;
}

const existsCEP = async (cep) => {
  const lookCEP = await lookupCEP(cep);
  if (!lookCEP[0]) return false;
  return true;
}

const createNewCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const currenteCEP = formatCEP(cep);
  const exist = await existsCEP(currenteCEP);
  if (exist) return true;
  return saveCEP = createCEP(currenteCEP, logradouro, bairro, localidade, uf);
  
}

module.exports = { cepCheck, formatCEP, existsCEP, createNewCEP };