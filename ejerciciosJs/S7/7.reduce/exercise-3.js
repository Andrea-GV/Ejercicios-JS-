// Dado el siguiente array, haz la media de las notas de todos los examenes .reduce().


const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const valorInicial = 0;
const sumaDeNotas = exams.reduce((acumulador, exam) => acumulador + exam.score, valorInicial);
console.log(sumaDeNotas);

const mediaDeNotas = sumaDeNotas / exams.length; // poner el 10 me parece un poco guarro... funciona con .length?
console.log(mediaDeNotas)

// YUHUUUUUUU xD