/*--
    --- OPERADORES - SORT ---
    El método SORT, Permite ordernar elementos, de menor a mayor, o alfabéticamente
--*/


/*-- Ordenando una Lista de Objetos --*/
const countries = [
    { countrie: 'Mexico', foundation: 1521 },
    { countrie: 'Italy', foundation: 1946 },
    { countrie: 'China', foundation: 1949 },
    { countrie: 'Japan', foundation: 660 },
    { countrie: 'Brazil', foundation: 1822 },
]

const orderCountries = countries.sort((foundationA, foundationB) => {// Podemos invocar una Función ya sea almacenando en variable o directamente
    if (foundationA.foundation < foundationB.foundation) return -1
    if (foundationA.foundation > foundationB.foundation) return 1
    return 0
}
)

console.log(orderCountries)

