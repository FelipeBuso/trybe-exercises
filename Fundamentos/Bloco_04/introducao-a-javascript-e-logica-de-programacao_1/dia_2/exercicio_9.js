let array = [];

let resultDiv = [];

for (index = 0; index < 25; index += 1) {
    array.push(index + 1)
}

for (let indexArray of array){
    resultDiv.push(indexArray / 2)
    console.log(indexArray / 2)
}

console.log(resultDiv);