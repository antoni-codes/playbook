/*--
    --- CLASES & OBJETOS - STATICS ---
    Los métodos static nos ayudan a escribir métodos en una clase que podemos usar sin
    necesidad de instanciar algún objeto.
--*/

class DataBase {
    static getLastData() {
        return ["Carlos", "Diseñador", "15,000"]
    }
}

console.log("Método Static");
// Se puede llamar el método static directamente con el nombre de la clase
console.log(DataBase.getLastData());

// Si intentamos instanciarun objetos, no podemos llamar este método static

/*
    Ejemplo: const newData = new DataBase();
    console.log(newData.getLastData()) // Is not a function
*/

