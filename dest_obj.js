un_nodo={
    sub_nodo:{
        otro_nodo:{
            cursor: 1,
            linea : 1
        }
    }
}

let {sub_nodo:{otro_nodo:cursor1}} = un_nodo; 
//DESCOMPONE NODO A NODO, DE AFUERA HACIA ADENTRO

let{sub_nodo:{otro_nodo:{cursor:curs2}}} = un_nodo;

console.log(cursor1); console.log(curs2);

//MODO FACIL
let nodo_facil = un_nodo.sub_nodo.otro_nodo;
console.log(nodo_facil);

