const fs = require("node:fs");
var texto="";
var lista=[];
var largo=0;
var seguros=0;
var seguros2=0;
function esAscendente(arr){
    for(let i=1; i<arr.length; i++){
        if(Number(arr[i])<=Number(arr[i-1])){return false}
    }
    return true;
}
function esDescendente(arr){
    for (let i=1; i<arr.length; i++){
        if (Number(arr[i])>=Number(arr[i-1])){return false}
    }
    return true;
}
function distancia(arr){
    for (let i=1; i<arr.length; i++){
        if (Math.abs(Number(arr[i])-Number(arr[i-1]))>3 || Math.abs(Number(arr[i])-Number(arr[i-1]))<1){return false}
    }
    return true;
}

function safe (arr){
    if( (esAscendente(arr) || esDescendente(arr)) && distancia(arr)){return true}
}

fs.readFile("/Users/nicol/Documents/estudiandin/2024/Advent of Code/2input.txt", "utf8", (err, data) => {
    if (err){
        return console.error("error reading the file", err);
    }
    texto=data;
    lista=texto.split("\r\n");
    largo=lista.length;

    for(let i=0; i<largo; i++){
        let listax=lista[i].split(" ");
        if(safe(listax)){
            seguros++;
        }

    }
var a=0
    for(let i=0; i<largo; i++){
        let listax=lista[i].split(" ");
        if(safe(listax)){
            seguros2++;
        }else{
            for (let j=0; j<listax.length; j++){
                let listaxx=[...listax]
                listaxx.splice(j,1);
                if(safe(listaxx)){a=1}
            }
            seguros2+=a
            a=0;
        }

    }




    console.log("la cantidad segura es: ", seguros);
    console.log("la cantidad segura con Problem Dampener es: ", seguros2);
});