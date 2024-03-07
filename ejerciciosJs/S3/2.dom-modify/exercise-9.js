// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

// 1º Capturamos todos los elementos (divs) a los que queremos atacar  y los meto en una constante para guardarlo en un array
const allDiv = document.querySelectorAll('.fn-insert-here');

// 2º para que se me guarden los DIVS, creamos una función que guarde los arrays y creamos los p. Después creamos los hijos donde irán los p
for (let div of allDiv) {
    const p = document.createElement('p');
    p.textContent = '¡Voy dentro!'
    div.appendChild(p)
}