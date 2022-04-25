/*--
    --- OPERADORES - FIND ---
    El método Reduce, permite encontrar el "primer" elemento de una lista
    que cumpla con lo que indiques.
--*/

const workersAges = [34, 58, 18, 16, 24, 28, 32, 41]
const permitionToWorkByAge = workersAges.find((age) => age <= 18)

console.log("A partir de esta edade no pueden trabajar " + permitionToWorkByAge );

