let valorCusto = 10;
let valorVenda = 13;

let custoTotal = valorCusto + (0.2 * valorCusto);

let lucrototal = (valorVenda - custoTotal) * 1000; 

if (valorVenda < 0 || valorCusto < 0) {
    console.log('Valor inválido')
} else {
    console.log('O lucro da venda é de', lucrototal)
}