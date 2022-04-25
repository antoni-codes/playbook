/*--
    --- OPERADORES - SOME ---
    El método some, valida todos los elementos de la lista, y si "al menos 1" cumple
    con la validación indicada, regresará true, de lo contrario sera false.
--*/

const shoppingList = ['Eggs', 'tea', 'Coffe', 'Sugar', 'Tea', ]
const someIsInList = shoppingList.some((product) => product === 'Tea')

console.log(`¿La lista incluye el producto que necesitas? "${someIsInList}"`);
