/*--
    --- OPERADORES - REDUCE ---
    La función Reduce, permite calcular la suma de los elementos 
    de una lista
--*/

const califications = [10, 9, 8, 9, 7]

const initialValue = 0;
const totalCalifications = califications.reduce((previousCalification, currentCalification) => 
    previousCalification + currentCalification, initialValue
)

console.log(totalCalifications);