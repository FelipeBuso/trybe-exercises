let n = 5;

let arrayPyramide = [];

let nCurrent = 0;

if (n % 2 !== 0) {
    nCurrent = Math.floor(n / 2);
} else { 
    console.log('O número não é impar')
}

for (let index = 0; index < n; index += 1) {
    if (index !== nCurrent) {
        arrayPyramide.push(' ');
    } else {
        arrayPyramide.push('*');
    }
}  console.log(arrayPyramide.join(''));