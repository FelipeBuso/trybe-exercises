let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arrayMulti = []

for (let index = 1; index <= numbers.length; index += 1) {
    if (index === numbers.length) {
        arrayMulti.push(numbers[index - 1] * 2)
    } else {
        arrayMulti.push(numbers[index] * numbers[index - 1]);
    } 
}
console.log(arrayMulti);