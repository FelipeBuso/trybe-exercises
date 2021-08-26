let ladoA = 9.99;
let ladoB = 60.01;
let ladoC = -110;

let somaLados = ladoA + ladoB + ladoC;
if (ladoA < 0 || ladoB <0 || ladoC <0) {
    console.log('ângulo inválido')
} else if (somaLados === 180) {
    console.log(true)
} else {
    console.log(false)
}