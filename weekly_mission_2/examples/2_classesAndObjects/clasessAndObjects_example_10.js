/*--
    --- CLASES & OBJETOS - OVERRIDING METHODS ---
--*/

class Stores {
    constructor(nameDirector, placeStore, totalProducts) {
        this.nameDirector = nameDirector
        this.placeStore = placeStore
        this.totalProducts = totalProducts
    }

    getInfoStore() {
        return `Director's name: ${this.nameDirector}, Place: ${this.placeStore}, Total Productos ${this.totalProducts}`
    }
}

class NewStore extends Stores {
    constructor(nameDirector, placeStore, totalProducts, floors) {
        super(nameDirector, placeStore, totalProducts) // Super nos ayuda a llamar los atributos del constructor padre
        this.floors = floors // Este atributo de a clase NewStore, es exclusiva de esta clase y no de la clase padre
    }

    getGeneralInfo() {
        let infoStore = this.getInfoStore() // Llamamos el método de la clase padre
        // infoStore es una variable de esta función, no necesitas usar this para referenciarla.
        return `${infoStore}, Floors: ${this.floors}`
    }
}

const newStoreData = new NewStore("Laura Guerrero", "Polanco", 3500, 3)
console.log("Overriding Methods");
console.log(newStoreData);
console.log(newStoreData.getInfoStore()); // Método de la clase padre
console.log(newStoreData.getGeneralInfo()); // Método de la clase hijo

