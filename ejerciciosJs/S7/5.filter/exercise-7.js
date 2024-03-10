// Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


const input = document.getElementById('input');

input.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    const streamersFiltrados = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue));
    console.log(streamersFiltrados);
});


// Esta función no ha funcionado como quería
// const inputBody = document.getElementById('input');     // coge el id del input

// const weirdos = (event) => {
//     // console.log(event);
//     const streamersFiltrados = streamers.filter(streamer => streamer.name.includes(event.target.value.toLowerCase()));
//     // console.log(streamersFiltrados);
//     // console.log(weirdos)
// }

// inputBody.addEventListener('input', weirdos);