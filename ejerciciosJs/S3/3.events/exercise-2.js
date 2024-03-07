// Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector('input');    // <---- captura el apartado al que quiere atacar

input.addEventListener('focus', recogerDatos)       // <---- le añade el listener y le dice "focus" sobre recogerDatos

function recogerDatos(event) {
   console.log(event.target.value)          // event.target.value --- qué etiqueta tiene q devolver
}
