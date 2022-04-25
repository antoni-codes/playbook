/*--
    --- OPERADORES - FILTER ---
    La función Filter, permite "Filtrar" una lista de elementos.
    Ejemplo: "El filtro de búsqueda por categoría de una tíenda en línea"
--*/

// Filtrar una lista por condicional

const vaccineList = [
    { nameVaccine: 'Sputnik-V',   age: 18 },
    { nameVaccine: 'Pfitzer',     age: 30 },
    { nameVaccine: 'Aztraseneka', age: 40, },
    { nameVaccine: 'Sputnik-V',   age: 50, },
    { nameVaccine: 'Aztrseneka',  age: 60, },
    { nameVaccine: 'Moderna',     age: 70 }
]

const vaccineSelection = vaccineList.filter((age) => age.age > 40)

console.log(vaccineSelection);