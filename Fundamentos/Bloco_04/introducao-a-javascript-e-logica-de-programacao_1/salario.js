let salarioBruto = 3000;

let inss1_556_64 = salarioBruto * 0.08;
let inss1_556_95__2_594_92 = salarioBruto * 0.09;
let inss2_594_93__5_189_82 = salarioBruto * 0.11;
let inss5_189_83 = 570.88;

let parcelaIr1_903_98 = 0;
let parcelaIr1_903_99__2_826_65 = 142.8;
let parcelaIr2_826_66__3_751_05 = 354.8;
let parcelaIr3_751_06_4_664_68 = 636.13;
let parcelaIr4_664_69 = 869.36;

let aliquotaIr1_903_98 = 0;
let aliquotaIr1_903_99__2_826_65 = 0.075;
let aliquotaIr2_826_66__3_751_05 = 0.15;
let aliquotaIr3_751_06_4_664_68 = 0.225;
let aliquotaIr4_664_69 = 0.275;





let salarioBase;

let salarioLiquido;

if (salarioBruto <= 1556.94 && salarioBruto >= 0) {
    salarioBase = salarioBruto - inss1_556_64
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - inss1_556_95__2_594_92
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - inss2_594_93__5_189_82
} else if (salarioBruto >= 5189.83) {
    salarioBase = salarioBruto - inss5_189_83
} else {
    console.log('Salário invalido')
}

let Ir1_903_98 = (salarioBase * aliquotaIr1_903_98) - parcelaIr1_903_98;
let Ir1_903_99__2_826_65 = (salarioBase * aliquotaIr1_903_99__2_826_65) - parcelaIr1_903_99__2_826_65;
let Ir2_826_66__3_751_05 = (salarioBase * aliquotaIr2_826_66__3_751_05) - parcelaIr2_826_66__3_751_05;
let Ir3_751_06_4_664_68 = (salarioBase * aliquotaIr3_751_06_4_664_68) - parcelaIr3_751_06_4_664_68;
let Ir4_664_69 = (salarioBase * aliquotaIr4_664_69) - parcelaIr4_664_69;