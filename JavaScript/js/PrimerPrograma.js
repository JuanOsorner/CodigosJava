//Llenar un vector con una palabra
let palabra = prompt("Ingrese una palabra: ");
let numero = Number(prompt("Ingrese un numero entero positivo")); //Así pedimos aqui al usuario que ingrese datos
LlenarVector(palabra,numero);
function LlenarVector(P,x){
    let V = [];
    for(let i = 0; i < palabra.length; i++){ //Saber el tamaño de la palabra
        V.push(P[i]);
    }
    if(Number.isInteger(x)&&x>=0){
        let y = Number((x+palabra.length)%x);
    } else {
        let y = "No se han ingresado enteros positivos";
    }
    return console.log("El vector es: "+V+"\nEl numero aleatorio es: "+x+"\nLa letra aleatoria es: "+P[x-1])
} //P[posicion del arreglo recuerde que va de 0 a N]
