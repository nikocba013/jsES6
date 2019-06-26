
class Persona {

    constructor(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        console.log(this.nombre);
    }
}

let pers1 = new Persona("Lau");

pers1.getNombre();