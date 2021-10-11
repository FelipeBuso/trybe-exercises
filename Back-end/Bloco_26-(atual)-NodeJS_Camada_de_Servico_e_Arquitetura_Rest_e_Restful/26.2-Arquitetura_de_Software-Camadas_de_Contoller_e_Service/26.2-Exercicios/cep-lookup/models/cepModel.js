const { connectionMySQL } = require('../models/connectionMySQL');

const getAll = async () => {
  const [ceps] = await connectionMySQL.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps'
  );
  return ceps;
}

const lookupCEP = async (cep) => {
  const [getCEP] = await connectionMySQL.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?', [cep]
  );
  return getCEP;
}

const createCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const saveCEP = await connectionMySQL.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)', [cep, bairro, logradouro, localidade, uf]
  );
  console.log(saveCEP);
}
module.exports = {
  getAll,
  lookupCEP,
  createCEP,
}