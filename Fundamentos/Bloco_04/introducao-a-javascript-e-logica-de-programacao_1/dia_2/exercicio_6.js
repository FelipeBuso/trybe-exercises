let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let counter = 0;

for (let number of numbers) {
    if (number % 2 !== 0) {
        counter += 1;
    }
}
if (counter === 0) {
    console.log('nenhum valor ímpar encontrado')
} else if (counter === 1) {
    console.log('Tem ' + counter + ' número ímpar')
} else {
    console.log('Tem ' + counter + ' números ímpares')
}
