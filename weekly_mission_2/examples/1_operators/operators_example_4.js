/*--
    --- OPERADORES - MAP ---
    El método Map permite recorrer los elementos de una lista y crear
    una nueva lista.

    / Arrow Function & Explicit Return/
    const modifiedArray = arr.map((element, index) => element)
--*/


const numbersArray = [1, 2, 3, 4, 5]
const numbersSquare = numbersArray.map(function(num) {
    return num * num;
})

// También puedes escribir la función como Arrow Function
// const numbersSquare = califications.map((num) => {return num * num})
console.log("Imprimiendo la suma de la lista de calificaciones")
console.log(numbersSquare)

