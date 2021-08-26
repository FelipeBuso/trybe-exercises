function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let daysContainer = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dayElement = dezDaysList[index];
    let dayElementList = document.createElement('li');
    dayElementList.className = "day";
    dayElementList.innerText = dayElement;
    daysContainer.appendChild(dayElementList);       
   }

  let listDay = document.querySelectorAll('.day');
  for (index = 0; index < listDay.length; index += 1) {
    // console.log(listDay[index].innerText);
    if (listDay[index].innerText === '24' || listDay[index].innerText === '25' || listDay[index].innerText === '31') {
     listDay[index].classList.add('holiday');
    }
  }
  
  for (index = 0; index < listDay.length; index += 1) {
    if (listDay[index].innerText === '4' || listDay[index].innerText === '25' || listDay[index].innerText === '11' || listDay[index].innerText === '18') {
    listDay[index].classList.add('friday');
    }
  }

  let btnHolidayParent = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = 'Feriados';
  btnHoliday.id = 'btn-holiday';
  btnHolidayParent.appendChild(btnHoliday);

  let buttonHoliday = document.querySelector('#btn-holiday');
  // console.log(buttonHoliday);
  buttonHoliday.addEventListener('click', function(){
    let backGroundHoliday = document.querySelectorAll('.holiday');
    // console.log(backGroundHoliday.length);
    for (index = 0; index < backGroundHoliday.length; index += 1) {
      if (backGroundHoliday[index].style.backgroundColor === '#32a852') {
        backGroundHoliday[index].style.backgroundColor = '#eeeeee';
      } else {
        backGroundHoliday[index].style.backgroundColor = '#32a852';
      }
   }
  })

