

function agregarAlumno(arr_al, ...alumnos){

    for(let i=0; i<alumnos.length; i++){
        arr_al.push( alumnos[i]);
    }
    return arr_al;
}

let alumn_arr= ['Fernando'];

let total = agregarAlumno(alumn_arr,'maria','jose','carlos');

console.log(total);

// SOLO PUEDE HABER UN UNICO PARAMETRO REST Y DEBE IR COMO ULTIMO ATRIBUTO DE LA FUNCION.