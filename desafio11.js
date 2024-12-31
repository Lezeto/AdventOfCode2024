let string= "70949 6183 4 3825336 613971 0 15 182"
let lista= string.split(" ");
lista=lista.map(x=>Number(x))
let lista2=[];
for(let i=1; i<=25; i++){
    for (let n of lista){
        if (n==0){lista2.push(1)}else{
        let c=String(n);
        if (c.length%2==0){
            lista2.push( Number(c.slice(0, c.length/2)), Number(c.slice(c.length/2, c.length)) );
        }else{
            lista2.push(n*2024);
        }
    }}
    lista=[...lista2];
    lista2=[];
    console.log("Iteraciones realizadas: " + i);
}
console.log(lista.length)
