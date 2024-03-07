// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];
 
// const capitalStreamers = streamers.filter(streamer => {
//     const returned = streamer.gameMorePlayed.toLowerCase().includes('Legends')
//     if (returned & streamer.age > 35) {
//         streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//     }  return returned
//     });
const capitalStreamers = streamers.filter(streamer => {
    if (streamer.age > 35 && streamer.gameMorePlayed.includes('Legends')) {
        return streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    } else if (streamer.gameMorePlayed.includes('Legends')) {
        return streamer.gameMorePlayed.includes('Legends');
     }
});        
console.log(capitalStreamers); 