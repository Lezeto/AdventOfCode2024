const fs = require("node:fs");
var texto1= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/5input1.txt",{encoding: "utf8", flag: "r"});
var texto2= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/5input2.txt",{encoding: "utf8", flag: "r"}); 
let lista1=texto1.split("\r\n");
let suma=0;
function cumple(a,b){
    for (let i=0; i<lista1.length;i++){
        let x=Number(lista1[i][0]+lista1[i][1]);
        let y=Number(lista1[i][3]+lista1[i][4]);
        if (a==y && b==x){return false}
    }
    return true
}

let lista2=texto2.split("\r\n")
for (let i=0;i<lista2.length;i++){
    lista2[i]=lista2[i].split(",");
}

for (let l=0;l<lista2.length;l++){
    let lcumple=true;
    for(let n=1;n<lista2[l].length;n++){
        for(let p=0;p<n;p++){
            if(!cumple(lista2[l][p],lista2[l][n])){lcumple=false}
        } 
    }
    if(lcumple==true){
        suma+=Number(lista2[l][(lista2[l].length/2)-0.5])
    }
}




console.log(suma);