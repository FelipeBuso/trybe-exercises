let count = 0;
const botao = document.getElementById('btn');
botao.addEventListener('click', () => {
  let atualCount = count + 1;
  contador.innerText = atualCount;
  count = atualCount;
});

window.onload = () => {
const contador = document.getElementById('contador');

contador.innerText = count;
};
