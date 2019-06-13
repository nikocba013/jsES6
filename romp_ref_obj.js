
let pers1 = {
    nombre: 'Juan',
    edad  : 33 }

let pers2 = {...pers1}; //SEPARA EL OBJETO Y PASA CADA VALOR PROPIEDAD COMO INDIVIDUAL
                        // ESTO SIRVE PARA SEPARAR LOS OBJETOS Y NO USAR LA MISMA REFERENCIA.

pers2.nombre='Carlos'

console.log(pers1);
console.log(pers2);