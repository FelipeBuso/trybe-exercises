window.onload = function () {
  const arrayUF = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];
  const arrayStates = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"]
  const selectState = document.getElementById('input-state');

  for (let index = 0; index < arrayStates.length; index += 1) {
    let optionState = document.createElement('option');
    optionState.value = arrayUF[index];
    optionState.innerText = arrayStates[index];
    selectState.appendChild(optionState);
  }
};

let checkIniDate = document.getElementById('ini-date');
checkIniDate.addEventListener('change', function () {  
  let inputIniDat = checkIniDate.value.split('/');
  // console.log(inputIniDat);
  // console.log(checkIniDate);
  let now = new Date;
  if (inputIniDat[0] > 31 || inputIniDat[0] < 1) {
    alert("O dia digitado não é valido");
  } else if (inputIniDat[1] > 12 || inputIniDat[1] < 1) {
    alert('O mês escolhido não é válido')
  } else if (inputIniDat[2] < 1900 || inputIniDat[2] > now.getFullYear()) {
    alert ('O ano não é válido');
  }
});