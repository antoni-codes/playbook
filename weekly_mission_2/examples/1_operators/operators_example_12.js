/*--
    --- OPERADORES - FIND ---
    La función Reduce, permite encontrar el "primer" elemento de una lista
    que cumpla con lo que indiques.
--*/

/*-- Uso de Find en una Lista de Objetos que muestea "SOLO" el primer elemento que cumpla la condición--*/
const vaccineList = [
    { nameVaccine: 'Sputnik-V', age: 18 },
    { nameVaccine: 'Pfitzer', age: 30 },
    { nameVaccine: 'Aztraseneka', age: 40, },
    { nameVaccine: 'Sputnik-V', age: 50, },
    { nameVaccine: 'Aztrseneka', age: 60, },
    { nameVaccine: 'Moderna', age: 70 }
]

const vaccineSelection = vaccineList.find((user) => user.age > 40)

console.log("Te toca la vacuna: " + vaccineSelection.nameVaccine);