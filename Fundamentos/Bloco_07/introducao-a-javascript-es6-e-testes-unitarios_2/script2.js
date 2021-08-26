const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const insertTurno = {
  turno: 'manhã',
}


Object.assign(lesson2, insertTurno);
// console.table(lesson2);

const allLessons = {
  lesson1,
  lesson2,
  lesson3,
}
console.log(allLessons);

const showKeys = lesson => Object.keys(lesson);
console.log(showKeys(lesson1));
console.log(showKeys(lesson2));
console.log(showKeys(lesson3));

const showKeysLength = lesson => Object.keys(lesson).length;
console.log(showKeysLength(lesson1));
console.log(showKeysLength(lesson2));
console.log(showKeysLength(lesson3));

const showValues = lesson => Object.values(lesson);
console.log(showValues(lesson1));


