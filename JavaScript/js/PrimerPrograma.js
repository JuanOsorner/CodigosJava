//Llenar un vector con una palabra
let palabra = prompt("Ingrese una palabra: ")
let numero = prompt("Ingrese un numero entero positivo") //Así pedimos aqui al usuario que ingrese datos
aleatorio(numero);
function LlenarVector(V){
    let V = [];
    for(let i = 0; i < palabra.length; i++){ //Saber el tamaño de la palabra
        V.push(palabra[i]);
    }
    return console.log(V);
}
//Pensemos inicialmente en un numero del 0 a N (Natural que este entre ellos y lo imprima de manera aleatoria)
function aleatorio(x){
    return (Number.isInteger(numero) && numero >0) ? x + palabra.length % x : console.log("No se ingresaron enteros") ;
} //Numero aleatorio entre 0 y x

