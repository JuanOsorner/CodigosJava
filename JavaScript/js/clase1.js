let nota = Number(prompt("Ingrese una nota: "))
while(true){
    if(nota<=0 || nota > 5){
        console.log("No se ingresaron los datos")
        break
    } else{
        if(0<=nota && nota<=2.0){
            console.log("Jhonier perdio la materia.")
            break
        }else if(2.01<=nota && nota<=2.9){
            console.log("Jhonier es gay pero se puede recuperar")
            break
        } else if(3.0<=nota && nota<=3.9){
            console.log("Gano pero no a Januarys")
            break
        } else if(4.0<= nota && nota <=4.5){
            console.log("Jhonier ya casi te ama Januarys")
            break
        } else{
            console.log("Jhonier despierta era sueño")
            break
        }
    }
}
