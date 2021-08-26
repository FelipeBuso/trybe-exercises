let pecaXadrez = 'rAinhas'
let peca = pecaXadrez.toLowerCase();

switch(peca) {
  case 'rei':
      console.log('Uma casa por vez, em qualquer direção');
      break;
    
  case 'rainha':
    console.log('Quantas casas quiser, em qualquer direção');
    break;

  case 'torre':
    console.log('Quantas casas quiser, na vertical ou na horizontal');
    break;

  case 'bispo':
    console.log('Quantas casas quiser, na diagonal');
    break;

  case 'cavalo':
    console.log('Em L, e pode pular peça');
    break;

  case 'peão':
    console.log('1 casa na vertical');
    break;

  default:
    console.log('erro')
}