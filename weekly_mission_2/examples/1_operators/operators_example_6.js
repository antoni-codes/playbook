/*--
    --- OPERADORES - MAP ---
    El método Map permite recorrer los elementos de una lista y crear
    una nueva lista.
--*/

/*-- Uso de map para extraer solo las primeras 3 letras de una lista y convertirlo a mayúsculas --*/

const nameCars = ['Ferrari', 'Audi', 'Tesla', 'Mercedes Benz', 'Porshe']
const names1stThreeLetters = nameCars.map((name) => 
    name.toUpperCase().slice(0, 3) // El método slice obtiene solo la longitud marcada del String
)

console.log("Uso de map para convertir en mayúsculas, y extraer solo las primeras 3 letras");
console.log(names1stThreeLetters)
