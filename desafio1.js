const fs = require("node:fs");
var texto = "";
var lista = [];
var listaA = [];
var listaB = [];
var suma=0;
var score=0;
const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

fs.readFile("/Users/nicol/Documents/estudiandin/2024/Advent of Code/1input.txt", "utf8", (err, data) => {
    if (err){
        return console.error("error reading the file", err);
    }
    texto = data;
    lista = texto.split(" ");
    lista = lista.filter(x=>x!=="");
    for (let i=0; i<2000; i=i+2){
        listaA.push(lista[i])
    }
    for (let i=1; i<2000; i=i+2){
        listaB.push(lista[i])
    }
    listaA=quickSort(listaA);
    listaB=quickSort(listaB);
    for (let i=0;i<1000;i++){
        suma+= Math.abs(Number(listaA[i])-Number(listaB[i]));
    }

    console.log("La suma es: ", suma);

    for (let i=0; i<1000; i++){
        for (let j=0; j<1000; j++){
            if (listaA[i]==listaB[j]){
                score+=Number(listaA[i]);
            }
        }
    }
    console.log("El score es: ", score);

});
