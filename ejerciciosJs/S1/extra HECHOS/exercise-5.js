// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [
    { name: 'Gorra de rodilla', sellCount: 10 },
    { name: 'Pantalón de pana', sellCount: 302 },
    { name: 'Reloj de papel albal', sellCount: 23 },
    { name: 'Impar de zapatos', sellCount: 6 }
];

let counter = 0;
for (let i = 0; i < products.length; i++) {
    const element = products[i];  
    counter += products[i].sellCount;
}

const media = counter / products.length;
console.log(media);