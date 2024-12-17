const fs = require("node:fs");
var texto="";
fs.readFile("/Users/nicol/Documents/estudiandin/2024/Advent of Code/4input.txt", "utf8", (err, data) => {
    if (err){
        return console.error("error reading the file", err);
    }
    texto=data;
    let lista = texto.split("\r\n")
    let suma=0;
    let suma2=0;
  
    for (let f=0; f<lista.length;f++){
        for (let c=0; c<lista[f].length-3;c++){
            if(lista[f][c]=="X" && lista[f][c+1]=="M" && lista[f][c+2]=="A" && lista[f][c+3]=="S"){suma+=1}
            if(lista[f][c]=="S" && lista[f][c+1]=="A" && lista[f][c+2]=="M" && lista[f][c+3]=="X"){suma+=1}
        }
    }

    for (let f=0; f<lista.length-3;f++){
        for (let c=0; c<lista[f].length;c++){
            if(lista[f][c]=="X" && lista[f+1][c]=="M" && lista[f+2][c]=="A" && lista[f+3][c]=="S"){suma+=1}
            if(lista[f][c]=="S" && lista[f+1][c]=="A" && lista[f+2][c]=="M" && lista[f+3][c]=="X"){suma+=1}
        }
    }

    for (let f=0; f<lista.length-3;f++){
        for (let c=0; c<lista[f].length-3;c++){
            if(lista[f][c]=="X" && lista[f+1][c+1]=="M" && lista[f+2][c+2]=="A" && lista[f+3][c+3]=="S"){suma+=1}
            if(lista[f][c]=="S" && lista[f+1][c+1]=="A" && lista[f+2][c+2]=="M" && lista[f+3][c+3]=="X"){suma+=1}
        }
    }
    for (let f=0; f<lista.length-3;f++){
        for (let c=3; c<lista[f].length;c++){
            if(lista[f][c]=="X" && lista[f+1][c-1]=="M" && lista[f+2][c-2]=="A" && lista[f+3][c-3]=="S"){suma+=1}
            if(lista[f][c]=="S" && lista[f+1][c-1]=="A" && lista[f+2][c-2]=="M" && lista[f+3][c-3]=="X"){suma+=1}
        }
    }

    console.log(suma);

    for (let f=0; f<lista.length-2;f++){
        for (let c=0; c<lista[f].length-2;c++){
            if(lista[f][c]=="M" && lista[f][c+2]=="M" && lista[f+1][c+1]=="A" && lista[f+2][c]=="S" && lista[f+2][c+2]=="S"){suma2+=1}
            if(lista[f][c]=="M" && lista[f+2][c]=="M" && lista[f+1][c+1]=="A" && lista[f][c+2]=="S" && lista[f+2][c+2]=="S"){suma2+=1}
            if(lista[f][c]=="S" && lista[f][c+2]=="S" && lista[f+1][c+1]=="A" && lista[f+2][c]=="M" && lista[f+2][c+2]=="M"){suma2+=1}
            if(lista[f][c]=="S" && lista[f+2][c]=="S" && lista[f+1][c+1]=="A" && lista[f][c+2]=="M" && lista[f+2][c+2]=="M"){suma2+=1}
        }
    }

        console.log(suma2)
})

