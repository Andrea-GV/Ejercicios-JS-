// Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [{ id: 5, name: 'Buzz MyYear' }, { id: 11, name: 'Action Woman' }, { id: 23, name: 'Barbie Man' }, { id: 40, name: 'El gato con Guantes' }, { id: 40, name: 'El gato felix' }]

const catToys = [];
const otherToys = [];
for (toy of toys) {
    if (toy.name.includes('gato')) {
        catToys.push(toy)
    } else {
        otherToys.push(toy)
    }
}

console.log(catToys)
console.log(otherToys)