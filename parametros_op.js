
function saludar( fn = fn1 , persona = "Juan"){

    fn();
    console.log(persona);
}

function fnFunc (){
    console.log(`holis`);
}

function fn1 (){
    console.log(`fua`);
}

let pers ={
    nombre:'Nicolas',
    apellido:'Ferreyra'
}
saludar(fnFunc,pers);