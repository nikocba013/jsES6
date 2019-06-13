
function eti(literales, ...substituciones){

    let res = "";
    console.log(literales);
    console.log(substituciones);
    
    for(let i = 0 ; i< substituciones.length;i++){
        
        res += literales[i];
        res += substituciones[i];
    }

    return res;
    
}

let unidades = 5;

let vuni = 10;


let mensaje = eti`${unidades} unidades cuestan ${unidades * vuni} pesos.`;

 console.log(mensaje);