/*--
    --- OPERADORES - FOR EACH ---
    Esta es un una función For Each que recorre los Elementos
    de una lista.
--*/


// For each para calcular la suma de todos los elementos de una lista

let sum = 0

const califications = [10, 9, 7, 9, 8]

califications.forEach(num => sum += num)

console.log("Suma todos los elements de una lista");
console.log(sum)