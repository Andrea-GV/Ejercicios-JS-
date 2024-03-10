// Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


const input = document.getElementById('input');

// lo siento, me daba error TODO el rato el querySelection y he hecho un id al input para poder pillarlo, porque no me dejaba. Sin embargo, en el 8, lo he puesto igual el el atributo y ahí sí me dejaba. Lo dejo abajo para dejar pruebas del delito xD

// const input = document.querySelector('[data-function="toFilterStreamers"]'); este era el q tenía y no lo pillaba


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