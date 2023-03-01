let v = [];
let maior = 0;
let linhaMaior;
let minimaxlinha ;


console.log(`Na teoria dos sistemas, define-se como elemento "minimax" de uma matriz o menor elemento da linha onde se
encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
elemento minimax, mostrando também sua posição.`)

for (let i = 0; i < 10; i++){
    v.push([]);
    for (let j = 0; j < 10; j++){
        v[i][j] = Math.floor(Math.random()*100); 
    };
};
for (let i = 0; i < 10; i++){
    let linha = v[i];
    let maxlinha = Math.max(...linha);
    if (maxlinha > maior){
        maior = maxlinha ;
        linhaMaior = i;
    };
};
minimax = v[linhaMaior].reduce(function(a,b){
    return Math.min(a, b);
});

console.table(v);
console.log(`Maior elemento é ${maior}, dentro da linha ${linhaMaior} `);
console.log(`Menor elemento da linha é ${minimax}`)