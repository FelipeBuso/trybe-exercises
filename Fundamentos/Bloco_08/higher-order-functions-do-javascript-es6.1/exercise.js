const employees = {};

const newEmplyees = (employeeCad) => {
  let id = `id + ${Object.keys(employees).length + 1}`;
  let email = `email-${id}`;
  newEmplyees.id = `${employeeCad}`;
  newEmplyees.email = `${employeeCad}@trybe.com`
  return newEmplyees;
};

console.log(newEmplyees('felipe_buso'));

console.log(newEmplyees('sheila_buso'));

