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

const getEmp = async (id) =>{
    
    const empDB = empleados.find( empleado => empleado.id ===id)
    
    if (!empDB){
        //error
        throw new Error(`El usuario con el id ${id} no existe.`);
    }else{
        return empDB ; //ESTO RETORNARIA EMPDB COMO PROMESA YA QUE ESTA LA PALABRA ASYNC EN LA FUNCION.
    }
}

const getSal = async (emp)=>{

    const salDB = salarios.find( salario => salario.id === emp.id);
    const emptotal= {
        nombre: emp.nombre,
        id: emp.id,
        salario: salDB.salario
    }

    if(!salDB){
        throw new Error(`No existe salario asignado para este empleado ${emp}`);
    }else{
        return emptotal;
    }  
}

const getInformacion = async (id)=>{

    let emp1 = await getEmp(id);
    let resp = await getSal(emp1);

    return `El empleado ${emp1.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(2).then( mensaje => console.log(mensaje));