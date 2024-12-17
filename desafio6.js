const fs = require("node:fs");
var texto1= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/6input.txt",{encoding: "utf8", flag: "r"});
let lista=texto1.split("\r\n");
lista = lista.map (x => x.split(""));
let listasCantidad=lista.length;
let listaLargo=lista[0].length;
let posicionInicial=[0,0];
let posicionActual=[0,0];
let suma=0;
for (let l=0; l<listasCantidad; l++){
    for (let n=0; n<listaLargo; n++){
        if (lista[l][n]=="<" || lista[l][n]==">" || lista[l][n]=="v" || lista[l][n]=="^"){posicionInicial=[l,n]}
    }
}
posicionActual=posicionInicial;
let direccion= lista[posicionActual[0]][posicionActual[1]];
while(posicionActual[0]<listasCantidad && posicionActual[1]<listaLargo && posicionActual[0]>=0 && posicionActual[1]>=0){

    if(direccion=="<"){
        if(lista[posicionActual[0]][posicionActual[1]-1]=="#"){direccion="^"}else
        posicionActual[1]-= 1;
        lista[posicionActual[0]][posicionActual[1]+1]="X"
    
    }
    if(direccion==">"){
        if(lista[posicionActual[0]][posicionActual[1]+1]=="#"){direccion="v"}else
        posicionActual[1]+= 1;
        lista[posicionActual[0]][posicionActual[1]-1]="X"
    }
    if(direccion=="^"){
        if(lista[posicionActual[0]-1][posicionActual[1]]=="#"){direccion=">"}else
        posicionActual[0]-= 1;
        lista[posicionActual[0]+1][posicionActual[1]]="X";

    }
    if(direccion=="v"){
        if(lista[posicionActual[0]+1][posicionActual[1]]=="#"){direccion="<"}else
        posicionActual[0]+= 1;
        lista[posicionActual[0]-1][posicionActual[1]]="X"
    }


}
for (let l=0; l<listasCantidad; l++){
    for (let n=0; n<listaLargo; n++){
        if (lista[l][n]=="X"){suma+=1}
    }
}

console.log(suma);