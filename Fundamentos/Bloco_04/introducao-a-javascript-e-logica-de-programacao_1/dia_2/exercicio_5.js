let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higher = 0;

for (let number of numbers) {
    if (number > higher) {
        higher = number;
    }
}
console.log('O maior numero do array é: ' + higher);