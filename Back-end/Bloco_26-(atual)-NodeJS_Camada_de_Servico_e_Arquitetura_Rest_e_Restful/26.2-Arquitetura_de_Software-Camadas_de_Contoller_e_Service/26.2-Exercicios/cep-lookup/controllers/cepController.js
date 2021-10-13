const { cepCheck, formatCEP, createNewCEP, existsCEP } = require('../services/cepServices');
const { getAll, lookupCEP } = require('../models/cepModel');

const getCEP = async (req, res) => {
  const { cep } = req.params;
  const checkCEP = cepCheck(cep);
  if(checkCEP) return res.status(400).json({ error: { code: 'invalidData', message: 'CEP inválido' } });

  const newCEP = formatCEP(cep);
  
  try {
    const returnedCEP = await lookupCEP(newCEP);
    if (!returnedCEP[0]) return res.status(400).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
    res.status(200).json(returnedCEP);
  } catch {
    res.status(500).json({ message: 'Erro de conexão'});
  }
}

const getAllCEPs = async (_req, res) => {
  try {
    const getCEPs = await getAll();
    res.status(200).json(getCEPs);
    
  } catch {
    res.status(500).json({ message: 'Erro de conexão'});
  }
}

const createCEP = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf} = req.body;
  const saveCEP = await createNewCEP(cep, logradouro, bairro, localidade, uf);
  if(saveCEP) return res.status(409).json({  "error": { "code": "alreadyExists", "message": "CEP já existente" } });
  res.status(200).json({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
}

module.exports = { getCEP, getAllCEPs, createCEP };