// Basándote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

// 1. capturamos el segundo div al q le aplicaremos la p
const segundoDiv = document.querySelector('div:last-child');

// 2. capturamos al nodo padre al q le aplicaremos el p entre los divs (En este caso, el body)
const body = document.body;

// 3. Luego creamos el P
const p = document.createElement('p')

// 4. añadimos el texto q queremos q contenga el p
p.textContent = 'Voy en medio!'

// 5. le decimos al segundo div que le inserte antes el P
body.insertBefore(p, segundoDiv)