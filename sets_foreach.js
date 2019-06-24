let personas = new Set(["Fer","Marcos","Lau"]);


personas.forEach( (item) => {
    console.log(item);

});

personas.forEach(function(valor,llave,setOriginal){
    console.log(valor,llave,setOriginal); //NO TENGO IDEA QUE ONDA ESTO.
});