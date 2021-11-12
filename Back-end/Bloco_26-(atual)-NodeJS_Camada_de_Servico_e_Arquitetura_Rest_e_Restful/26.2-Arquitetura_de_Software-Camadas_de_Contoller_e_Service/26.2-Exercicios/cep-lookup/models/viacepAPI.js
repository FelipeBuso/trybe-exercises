const fetch = require('node-fetch');
const URL_VIACEP = 'https://viacep.com.br/ws/?/json/';

async function getcepAPI(cep) {
  const cepReturned = await fetch(URL_VIACEP, [cep]);
  const result = await cepReturned.json();
  console.log(result);
}

getcepAPI(09521320);