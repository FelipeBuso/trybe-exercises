// // // const newObj = {};
// // // const nome = "Felipe";
// // // let newKey = 'Nome: '

// // // newObj[newKey] = nome;

// // // console.log(newObj);

// // const student1 = {
// //   Html: 'Muito Bom',
// //   Css: 'Bom',
// //   JavaScript: 'Ótimo',
// //   SoftSkills: 'Ótimo',
// // };
// // // console.log(Object.keys(student1));

// // const student2 = {
// //   Html: 'Bom',
// //   Css: 'Ótimo',
// //   JavaScript: 'Ruim',
// //   SoftSkills: 'Ótimo',
// //   Git: 'Bom', // chave adicionada
// // };
// // // console.log(Object.keys(student2));

// // const listSkilss = studant => {
// //   const arraySkilss = Object.keys(studant);
// //   for (skill in studant) {
// //     console.log(`Skill: ${skill} => ${studant[skill]}`);
// //   }
// // }
// // listSkilss(student1);
// // listSkilss(student2);

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsWithFor(student));

// // Com Object.values
// console.log(listSkillsWithValues(student));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);