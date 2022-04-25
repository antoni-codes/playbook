/*--
    --- CLASES & OBJETOS - INSTANCIAR UN OBJETO CON ATRIBUTOS ---
    Esto permite crear objetos a partir de una clase, y usar sus párametros
--*/


class Hero {
    // El constructor nos permite instanciar un objeto y asignarle parámetros, "this" nos ayuda a realizar esto.
    constructor(name, gender, powers) {
        this.name = name
        this.gender = gender
        this.powers = powers
    }
}

// Crear un objeto nuevo de la Clase Hero (a esto es lo que se le llama INSTANCIACIÓN)
const superman = new Hero('Superman', 'Male', ['Fly', 'X-ray Vision'])
console.log("Esto Instancia un objeto con atributos");
console.log(superman);
