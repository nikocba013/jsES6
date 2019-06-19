let persona1 = {
    nombre  : 'Fernando',
    edad    : 33,
    vehiculo: 'no'}

let persona2 = {
    nombre  : 'Maria',
    edad    : 35,
    vehiculo: 'si',
    mascotas: 'si',
    sexo    : 'fem'}

console.log(persona1);
console.log(persona2);

persona1.sexo = 'masc';
persona1 = {...persona2,...persona1};

console.log(persona1);
console.log(persona2);