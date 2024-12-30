const fs = require("node:fs");
var texto1= fs.readFileSync("/Users/nicol/Documents/estudiandin/2024/Advent of Code/8input.txt",{encoding: "utf8", flag: "r"});
let lista=texto1.split("\r\n");
lista=lista.map(x=>x.split(""));
let lista2=[...lista];
let filas = lista.length;
let filalargo= lista[0].length;
let coords={};
for (let f=0; f<filas; f++){
    for(let n=0; n<filalargo; n++){
        let c=lista[f][n];
        if (c!="."){
            if(c in coords){coords[c].unshift([f,n])}else{
                coords[c]=[[f,n]];
            }
        }
    }
}
function antinodo(coord1,coord2){
    let [x1,y1]=[...coord1];
    let [x2,y2]=[...coord2];
    let antinodos=[]
    let antinodo1=[x1-(x2-x1), y1-(y2-y1)];
    let antinodo2=[x2+(x2-x1), y2+(y2-y1)];
    if (antinodo1[0]>=0 && antinodo1[0]<filas && antinodo1[1]>=0 && antinodo1[1]<filalargo){
        antinodos.unshift(antinodo1);
    }
    if (antinodo2[0]>=0 && antinodo2[0]<filas && antinodo2[1]>=0 && antinodo2[1]<filalargo){
        antinodos.unshift(antinodo2);
    }
    return antinodos;
}
let antinodos=[];
for (c in coords){
    for (let i=0; i<coords[c].length-1; i++){
        for (let n=i+1; n<coords[c].length; n++){
            if (antinodo(coords[c][i],coords[c][n]).length>=0){antinodos.unshift(...antinodo(coords[c][i],coords[c][n]))}
        }
    }
}

for (let i=0; i<antinodos.length; i++){
    lista2[antinodos[i][0]][antinodos[i][1]]="#";
}
let suma=0;
for (let f=0;f<filas;f++){
    for (let i=0; i<filalargo; i++){
        if(lista2[f][i]=="#"){suma++}
    }
}

