const fs = require("node:fs");
var texto1= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/7input.txt",{encoding: "utf8", flag: "r"});
let lista=texto1.split("\r\n");
lista = lista.map (x => x.split(": "));
let suma=0;
function esPosible(listax){
    let resultado= Number(listax[0]);
    let listaB=listax[1].split(" ");
    listaB= listaB.map (x=> Number(x))
    let listaA=[];
    let listaAA=[];
    listaA.unshift(listaB.shift());
    while (listaB.length>0){
        for (let n=0; n<listaA.length;n++){
            listaAA.unshift(listaA[n]+listaB[0]);
            listaAA.unshift(listaA[n]*listaB[0]);
        }
        listaA=[...listaAA];
        listaAA=[];
        listaB.shift();
    }
    if (listaA.includes(resultado)){return true}else{return false}
}

for (let i=0; i<lista.length; i++){
    if (esPosible(lista[i])){suma+=Number(lista[i][0])}
}

console.log(suma);