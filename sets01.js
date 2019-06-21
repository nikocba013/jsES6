
let items = new Set();

items.add(10);
items.add(11);
items.add(12);
items.add(12);//IGNORA VALORES REPETIDOS
items.add("12");//LO AGREGA YA QUE LO TOMA COMO UN OBJETO



console.log(items);

console.log(items.has(10));