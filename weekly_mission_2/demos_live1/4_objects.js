
// Objeto: Este es un objeto vacío.
const person = {}

// Este es un objeto con propiedades:
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

// Un objeto es un conjunto de valores key-value
const explorer = {
    firstName: 'Carlo',
    lastName: 'Gilmar',
    age: 27,
    country: 'Mexico',
    city: 'CDMX',
    skills: [
        'JavaScript',
        'TypeScript',
        'CoffeeScript',
        'Elm'
    ]
}
console.log(explorer)

// Acceder a una propiedad del objeto
const commander = {
    firstName: 'Carlo',
    lastName: 'Gilmar',
    age: 27,
    country: 'Mexico',
    city: 'CDMX',
    skills: [
        'JavaScript',
        'TypeScript',
        'CoffeeScript',
        'Elm'
    ],
}

// Acceder a las propiedades del objeto usando "."
console.log(commander.firstName) // Carlo
console.log(commander.lastName)  // Gilmar
console.log(commander.age) // 27

// Acceder a las propiedades del objeto con "[]"
console.log(commander['firstName'])  // Carlo
console.log(commander['lastName'])  // Gilmar
console.log(commander['age'])   // 27
