let usuario = {
    nombre : 'Pedro',
    user:'Pe013',
    nacionalidad:'Argentino',
    premium:true,
    email:'blabla@gmail.com'
};

let { nombre , user , premium, nacionalidad:pais , 
    /*inicializar una nueva*/ twitter='agregar_twitter' } = usuario;

console.log(`${nombre} ${pais} `);
