let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Seja bem vinda(o), ' + info.personagem + '. É um prazer recebe-la(o)');
  
  info['recorrente'] = 'Sim';

  for (let key in info) {
      console.log(key);
      console.log(key + ': ' + info[key]);
  }