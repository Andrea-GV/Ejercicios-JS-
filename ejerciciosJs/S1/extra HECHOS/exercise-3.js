// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
{ name: "Your Name", durationInMinutes: 130 },
{ name: "Pesadilla antes de navidad", durationInMinutes: 225 },
{ name: "Origen", durationInMinutes: 165 },
{ name: "El señor de los anillos", durationInMinutes: 967 },
{ name: "Solo en casa", durationInMinutes: 214 },
{ name: "El jardin de las palabras", durationInMinutes: 40 },
];


function filtrarPorMinutos(duracionMinima, duracionMaxima) {
    const pelisFiltradas = movies.filter((pelicula) => pelicula.durationInMinutes >= duracionMinima && pelicula.durationInMinutes < duracionMaxima);
    return pelisFiltradas
}
let listaPelisCortas1 = filtrarPorMinutos(0, 100)
let listaPelisMedias1 = filtrarPorMinutos(100, 200)
let listaPelisLargas1 = filtrarPorMinutos (200, 1000)

function escribeListaPeliculas(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`La película ${lista[i].name} dura ${lista[i].durationInMinutes} minutos`)
    } 
}

escribeListaPeliculas(listaPelisCortas1)
console.log(listaPelisCortas1);
escribeListaPeliculas(listaPelisMedias1)
console.log(listaPelisMedias1);
escribeListaPeliculas(listaPelisLargas1)
console.log(listaPelisLargas1);