const precoetiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) { /// nao pode ter ; depois das () se nao encerra a delcaracao
    console.log ((precoetiqueta * 0.1) - precoetiqueta);
} else if (formaDePagamento === 2) {
    console.log((precoetiqueta * 0.15) - precoetiqueta);
} else if (formaDePagamento === 3) {
    console.log(precoetiqueta);
} else {
    console.log(precoetiqueta + (precoetiqueta * 0.1));
}
    