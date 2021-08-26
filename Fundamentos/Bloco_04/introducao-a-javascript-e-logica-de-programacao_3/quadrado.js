let n = 7;

let square = [];

for (index = 1; index <= n; index += 1) {
    square.push('*');
}

for (let indexSquare = 1; indexSquare <= n; indexSquare += 1) {
    console.log(square.join(''));
}
