/*let numero = 0
console.log(typeof(numero)) //Esto es importante en este tipo de lenguajes no tipados */        
//Vamos a crear un programa que tome un numero aleatorio entre 0 y 1 y lo convierta en un numero entre 1 y 100
let randomNumber = Math.random();
console.log(randomNumber)
let numero = randomNumber*Math.pow(10,17);
console.log(numero);
let Letras = String(numero); //Lo convertimos a entero
console.log(Letras);
console.log(Letras.length)
let V = []
for(let i = 0; i<Letras.length;i++){
    V.push(Letras[i+2]);
}
let numeros = parseInt(V.join("")); //Para tomar todo en una linea. Bueno para pasarlos a numeros
console.log(numeros);
switch(Letras.length){
    case 18: 
        console.log((numero-numeros)/Math.pow(10,16));
        break;
    case 17:
        console.log((numero-numeros)/Math.pow(10,15));
        break;
    case 16:
        console.log((numero-numeros)/Math.pow(10,14));
        break;
    default:
        console.log("ERROR");
} //Este algoritmo puede ser mas optimo. 
