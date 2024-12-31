const fs = require("node:fs");
var texto1= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/10input.txt",{encoding: "utf8", flag: "r"});
let lista=texto1.split("\r\n");
lista =lista.map(x=> x.split(""));
let alto= lista.length;
let ancho= lista[0].length;
let coord={};
for (let f=0; f<alto; f++){
    for (let n=0; n<ancho; n++){
        lista[f][n]=Number(lista[f][n]);
    }
}
function pertenece(p){
    if (p>=0 && p<alto*ancho){return true}else{return false}
}
let suma=0;
for (let f=0; f<alto; f++){
    for (let n=0; n<ancho; n++){
        let v =lista[f][n];
        if (v==0){
            let p=(f*ancho)+n
            let coordv= [[f,n]];
            let poss1=[p]
            let poss2=[]
            let coordv2= [];
            for (let i=0; i<9;i++){
                for (let coord of coordv){
                    let [x,y]=coord;
                    let pos= (x*ancho)+y;
                    if(pertenece(pos-ancho)){if (lista[x-1][y]==i+1){if (!poss2.includes(pos-ancho)){coordv2.push([x-1,y]); poss2.push(pos-ancho)} }}
                    if(pertenece(pos+1)){if (lista[x][y+1]==i+1){if (!poss2.includes(pos+1)){coordv2.push([x,y+1]); poss2.push(pos+1)} }}
                    if(pertenece(pos+ancho)){if (lista[x+1][y]==i+1){if (!poss2.includes(pos+ancho)){coordv2.push([x+1,y]); poss2.push(pos+ancho)} }}
                    if(pertenece(pos-1)){if (lista[x][y-1]==i+1){if (!poss2.includes(pos-1)){coordv2.push([x,y-1]); poss2.push(pos-1)} }}
                 }
                 
            coordv= coordv2.map(x=>[...x])
            coordv2=[];   
        }
            suma+=coordv.length;
            
            console.log("numeros analizados: " + ((f*ancho)+n) + "  Total de cabezas: " + suma);
    }
    
}
}
