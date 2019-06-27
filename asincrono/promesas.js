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

const getSal = (emp)=>{

    return new Promise ( (resolve,reject) =>{

        const salDB = salarios.find(salario => salario.id === emp.id);
       //console.log(emp.id);
    
       if (!salDB) {
           reject(`El empleado de nombre ${emp.nombre} no tiene salario asignado.`);
       }else{
           resolve({
               nombre: emp.nombre,
               id: salDB.id,
               salario: salDB.salario
           })
       }
    })
   
}


const getEmp = (id) =>{
    
    return new Promise( (resolve,reject)=>{
        
        const empDB = empleados.find( empleado => empleado.id ===id)
    
        if(!empDB)
        {
            reject(`El empleado con el id ${id} no existe.`);
        }else{
            resolve(empDB);
        }
    } )

}




getEmp(2).then( getSal)
 .then(resp=> console.log)

    
    // getSal(empleado).then( resp => {
    //     console.log(resp);
    // })

    //console.log('El empleado es' ,empleado);
    //console.log(`El empleado es ${empleado}`);

.catch(err=> console.log(err))