const fs = require("node:fs");
var texto1= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/9input.txt",{encoding: "utf8", flag: "r"});
let lista=texto1.split("");
let lista2=[]

for (let i=0; i<texto1.length; i++){
    if (i%2==0){   lista2.push(   ...Array(Number(lista[i])).fill(Math.floor(i/2) ))    }else{
        lista2.push(   ...Array(Number(lista[i])).fill(".")  )
    }
}

let i=0;
let n=lista2.length-1;
let suma=0;
while(i<n){
if (lista2[i]!="."){
    suma+=(lista2[i])*i
    i++
}else{
    if (lista2[n]!="."){
        suma+=(lista2[n])*i
        n--
        i++ 
    }else{
        n--
    }
}    
}






console.log(lista)
console.log(lista2);
console.log(suma);