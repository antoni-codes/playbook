/*--
    --- OPERADORES - EVERY ---
    El método Every, nos permite validar todos los elementos de una lista,
    si todos cumplen con la validación que indiques te regresa "true", de 
    lo contrario te regresa "false"
--*/


const names = ['Carmen', 'Laura', 'Carlos', 'Roberto']
const namesAreStrgs = names.every((name) => 
    typeof name === 'string'
)

console.log(`Todos los nombres string "${namesAreStrgs}"`)