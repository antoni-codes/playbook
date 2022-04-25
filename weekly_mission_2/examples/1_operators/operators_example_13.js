/*--
    --- OPERADORES - FINDINDEX ---
    El método FindIndex, regresa la posición del primer elemento que cumpla
    con la validación que se indique
--*/

const animals = ['Tiger', 'Dog', 'Elephant', 'Cat', 'Rat', 'Lizzard']
const animalResult = animals.findIndex((name) => name.length > 7)

console.log(`El valor con más de 7 palabras, esta en la posición: ${animalResult}`);
