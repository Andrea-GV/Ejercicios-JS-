// # Español
/*Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).

La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.

Ejecuta varias veces la función father y haz finalmente un console.log de numbersList */



// Qué coño es este ejercicio?!?!?! XO

const numbersList = [];

function sum(a , b) {
    return a + b;

}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    const wtf = callback(a, b);
    numbersList.push(wtf);
    // console.log(wtf); creo q funciona... 
}
// entiendo q ahora, tengo q ponerle las distintas funciones

father(9, 1, sum)
// console.log(numbersList); vale.... igual no es tan difícil

father(9, 1, substract)
// console.log(numbersList); Este por qué me devuelve 2 números?? y no 8! ah coño, porque he dejado la función father sum puesta (facepalm)

console.log(numbersList)
