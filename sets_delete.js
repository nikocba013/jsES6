
let items = new Set([1,2,3,4,5]);

console.log(items.size);

items.delete(3); //SE PONE EL ELEMENTO A ELIMINAR.

console.log(items.size);
console.log(items);

items.clear();
console.log(items.size);
console.log(items);