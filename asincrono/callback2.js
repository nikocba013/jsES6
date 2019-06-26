const empleados = [{
    id    : 1,
    nombre: "Fer"
},{
    id    : 2,
    nombre: "Mar"
},{
    id    : 3,
    nombre: "Clara"
}];

const salarios = [{
    id     : 1,
    salario: 2000
},{
    id     : 2,
    salario: 1500
}];


const getEmp = (id,callback) =>{
    
    const empleadoDB = empleados.find( empelado => empelado.id === id);

    if(!empleadoDB){
        callback(`El empleado ${id} no existe.`);
    }else{
        callback(null,(empleadoDB));
    }
}


const getSal = (id,callback)=>{
    const salDB = salarios.find(salario => salario.id===id);
    const nombDB = empleados.find(empleado => empleado.id ===id);
    let txt = {
        nombre: nombDB.nombre,
        salario: salDB.salario,
        id: salDB.id
    };

    if(!salDB || !nombDB){
        callback(`El empleado con el nombre ${nombDB.nombre} no tiene salario asignado o no existe.`);
    }else{
        callback(null,txt);
    }
}

getSal(2,(err,sal)=>{

    if (err) {
        return console.log(err);
    }else{
        console.log(sal);
    }
    
})


getEmp(3,(err,emp) => { 
    if (err) { return console.log(err);}

    console.log(emp);
})
