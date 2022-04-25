/*--
    --- OPERADORES - MAP ---
    El método Map permite recorrer los elementos de una lista y crear
    una nueva lista.
--*/

/*-- Uso de map para convertir a todos los nombres de una lista en minúsculas --*/

const nameStudents = ['CARLOS, LUIS, CARMELA, LORENA']
const namesLowercase = nameStudents.map((name) => name.toLowerCase())

console.log("Uso de map para convertir a todos los nombres de una lista a minúsculas")
console.log(namesLowercase);

