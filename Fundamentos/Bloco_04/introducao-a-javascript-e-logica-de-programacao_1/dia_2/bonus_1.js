let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let position;
let limit = numbers.length;

for (index = 0; index < numbers.length; index += 1) {
    for (let indexNumbers = 1; indexNumbers < limit; indexNumbers += 1) {
        if (numbers[indexNumbers] < numbers[indexNumbers - 1]){
            position = numbers[indexNumbers - 1];
            numbers[indexNumbers - 1] = numbers[indexNumbers];
            numbers[indexNumbers] = position;
        }
        
    }
    limit = limit - 1;
}
console.log(numbers)