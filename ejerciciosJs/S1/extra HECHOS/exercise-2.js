// Usa un for para reemplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    { name: "Salad", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true }
];

// const food = [fruits, foodSchedule];

// for (i = 0; i < foodSchedule.length; i++){
//     if (foodSchedule[i].isVegan === false) {
//         foodSchedule.splice(i, 1);
//         foodSchedule.push(fruits[0]);
//         fruits.splice(0,1);
//     }
// }

// console.log(foodSchedule);

let counter = 0;

for (i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    if(food.isVegan === false){
        food.name = fruits[counter];
        counter++;
    }
}
console.log(foodSchedule);