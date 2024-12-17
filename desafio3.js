const fs = require("node:fs");
var texto="";
fs.readFile("/Users/nicol/Documents/estudiandin/2024/Advent of Code/3input.txt", "utf8", (err, data) => {
    if (err){
        return console.error("error reading the file", err);
    }
    texto=data;
    let lista=texto.split("mul(");
    let suma=0;
    let reg=/^\d{1,3},\d{1,3}\)/;
    let listax=lista.filter(x=>x.match(reg))

    for (let i=0;i<listax.length;i++){
        listax[i]=listax[i].slice(0,listax[i].indexOf(")"))
    }
    
    for (let i=0;i<listax.length;i++){
        let a = listax[i].slice(0,listax[i].indexOf(","));
        let b = listax[i].slice(listax[i].indexOf(",")+1);
        suma+= Number(a)*Number(b);
    }




    console.log(suma);

})