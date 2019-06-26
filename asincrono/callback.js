
let getUser = (id,callback) =>{

    const usuario = {
        nombre:'Fernando',
        id
    };

    if(id === 20){
        callback(`El usuario con el id ${id} no existe.`);
    }else{
        callback(null,usuario);
    }
};

getUser(20, (err,user)=>{

    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});