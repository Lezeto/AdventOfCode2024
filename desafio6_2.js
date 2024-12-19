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

function esBucle(listax){
    direccion="^";
    posicionActual=[...posicionInicial];
    while(posicionActual[0]<listasCantidad && posicionActual[1]<listaLargo && posicionActual[0]>=0 && posicionActual[1]>=0){
        
        if(direccion=="<"){
            if(listax[posicionActual[0]][posicionActual[1]-1]==undefined){return false}
            if(listax[posicionActual[0]][posicionActual[1]-1]=="^"){return true}
            if(listax[posicionActual[0]][posicionActual[1]-1]=="#"){
                direccion="^";
            }else
            posicionActual[1]-= 1;
            listax[posicionActual[0]][posicionActual[1]+1]="<";
        }
        if(direccion==">"){
            if(listax[posicionActual[0]][posicionActual[1]+1]==undefined){return false}
            if(listax[posicionActual[0]][posicionActual[1]+1]=="^"){return true}
            if(listax[posicionActual[0]][posicionActual[1]+1]=="#"){
                direccion="v";
            }else
            posicionActual[1]+= 1;
            listax[posicionActual[0]][posicionActual[1]-1]=">";
        }
        if(direccion=="^"){
            if(listax[posicionActual[0]-1]==undefined){return false}
            if(listax[posicionActual[0]-1][posicionActual[1]]=="^"){return true}
            if(listax[posicionActual[0]-1][posicionActual[1]]=="#"){
                direccion=">";
            }else
            posicionActual[0]-= 1;
            listax[posicionActual[0]+1][posicionActual[1]]="^";
    
        }
        if(direccion=="v"){
            if(listax[posicionActual[0]+1]==undefined){return false}
            if(listax[posicionActual[0]+1][posicionActual[1]]=="^"){return true}
            if(listax[posicionActual[0]+1][posicionActual[1]]=="#"){
                direccion="<";
            }else
            posicionActual[0]+= 1;
            listax[posicionActual[0]-1][posicionActual[1]]="v";
        }
    }
    return false;
}
 for (let l=0; l<listasCantidad;l++){
    for (let n=0; n<listaLargo;n++){
        if (lista[l][n]!="#" && lista[l][n]!="^"){
            let lista2=lista.map((l=>[...l]));
            lista2[l][n]="#";   
            if(esBucle(lista2)){suma+=1}
        }

    }
 }

console.log(suma);