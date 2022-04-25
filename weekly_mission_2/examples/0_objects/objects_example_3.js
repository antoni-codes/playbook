/*--
    --- OBJETO CON PROPIEDADES DIFERENTES ---
    Este es un objeto con Propiedades Diferentes, como arrays
    y objetos anidados.
--*/


const objectDifferent = {
    name: 'Emmanuel',
    lastName: 'Hernández',
    age: 25,
    favoriteFood: [
        "pizza",
        "tacos",
        "chilaquiles"
    ],
    works: {
        year2015: 'callCenter',
        year2016: 'consultant',
        year2019: 'Web Developer'
    }
}

console.log("Este es un objeto con diferentes propiedades, como arreglos y objetos anidados")
console.log(objectDifferent);
console.log(objectDifferent.favoriteFood);
console.log(objectDifferent["works"]);