let f = function (nombre){
    return console.log(`${nombre} fua.`); //FUNCION ANONIMA EN ES5
}("Pedro");


let f1 = (nombre=> `${nombre} fua.`)("Mel");

console.log(f1);

