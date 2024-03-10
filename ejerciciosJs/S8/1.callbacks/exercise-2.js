/*# Español -------------------> y esto?? lo hemos traducido de internet, o qué?? xD


Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers*/


const userAnwsers = [];

function confirmExample(description){
    return confirm(description)                 // ----> no entiendo por qué me da error el return
}

function promptExample(description){
    return propmt(description)
}

function father(description, callback){ // entiendo q es un poco como el ejercicio anterior
    userAnwsers.push(callback(description))
}

// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');    ---->    qué es esto?
// const propmt = prompt('Soy un texto');

// confirmExample();
// promptExample();

father('holi guacamoli', confirmExample);
father('holi guacamoli prompitirriano', promptExample)

console.log(userAnwsers)

// espero que esté bien, porque me da error el return del confirm y no me deja ver nada



// HASTA AQUÍ MI TAREA , sori, ya no me da para más ... espero q los ejercicios de fetch y el async lo compense mi super pokeapi q sí tiene fetch, aunque la lié un poquito como me decías jiiii jiiiii :) 