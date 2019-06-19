let frutas= ["bananas","peras","manzanas"];

let [fruta1, fruta2] = frutas;
//LA DESTRUCTURACION DE ARREGLOS ES SECUENCIAL, SE DESTRUCTURA POR ORDEN.
console.log(fruta1,fruta2);

//PARA TRAER UN OBJETO QUE ESTE EN MEDIO
let [,,fruta3] = frutas;
console.log(fruta3);