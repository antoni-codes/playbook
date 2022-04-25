/*--
    --- OPERADORES - FILTER ---
    La función Filter, permite "Filtrar" una lista de elementos.
    Ejemplo: "El filtro de búsqueda por categoría de una tíenda en línea"
--*/

const shoppingList = ['Oranges', 'Milk', 'Eggs', 'Coffee', 'Sugar', 'Coca Cola']
const shoppingListWithEggs = shoppingList.filter((product) => // Esta es una función
    product.includes('Eggs')
)

console.log("Uso de filter para filtrar una lista de elementos");
console.log(`Si hay ${shoppingListWithEggs} en tu lista de compras`);


// Lista que inicia con una letra en específico startsWith()
const shoppingListStartWithC = shoppingList.filter((product) =>
    product.startsWith('C')
)
console.log("");
console.log("**********************************");
console.log("");
console.log("Uso de filter para filtrar una lista de elementos por 'letra inicial'");
console.log(shoppingListStartWithC);