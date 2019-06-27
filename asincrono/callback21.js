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


const getSal = (emp, callback)=>{
     const salDB = salarios.find(salario => salario.id === emp.id);
    //console.log(emp.id);

    if (!salDB) {
        callback(`El empleado de nombre ${emp.nombre} no tiene salario asignado.`);
    }else{
        callback(null,{
            nombre: emp.nombre,
            id: salDB.id,
            salario: salDB.salario
        })
    }
    
}


const getEmp = (id,callback) =>{
    const empDB = empleados.find( empleado => empleado.id ===id)

    if(!empDB)
    {
        callback(`El empleado con el id ${id} no existe.`);
    }else{
        callback(null,empDB);
    }

}


getEmp(1,(err,emp)=>{
    
    if(err){
        return console.log(err);;
    }
   
    //console.log(emp.id);
    getSal(emp,(er,emp)=>{
        if(er){
            return console.log(er);
        }
        console.log(emp);
    })

    // getSal(emp.id,(er,emp)=>{
    //     if(er){ return console.log(`puto`);}
    //     //return emp;
    //     console.log(emp);
    // });      
    
});

        
        // const getSal = (id,callback) =>{
        //     const salDB = salarios.find(salario => salario.id === id)
        //     const empDB = empleados.find (empleado => empleado.id === id)
        //     const etotal= {
        //         nombre: empDB.nombre,
        //         id:empDB.id,
        //         salario: salDB.salario
        //     }
        
        //     if(!salDB || !empDB){
        //         callback(`No se encontro salario para el empleado con nombre ${empDB.nombre}.`);
        //     }else{
        //         callback(null,etotal);
        //     }
        
        // }