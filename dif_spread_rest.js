
function saludarRest(saludo,...nombres){
    for(i in nombres)
    {
        console.log(`${saludo}${nombres[i]}`);  
    }
}

saludarRest('Holis, ','fer','luis','marcos');

let personas= ['juan','pedro','alicia'];

function saludarSpread(saludo,...persona){
    
    console.log(`${saludo} ${persona}`);
}

saludarSpread('Que Talco',personas);