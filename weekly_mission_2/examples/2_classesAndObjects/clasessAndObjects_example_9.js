/*--
    --- CLASES & OBJETOS - HERENCIA ENTRE DOS CLASSES ---
    HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
--*/


class ProductsWestStore {
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    get getName() {
        return this.name
    }
}

console.log("Esta es Herencia entre dos clases");
const product1 = new ProductsWestStore("Jabón", 65, 150 )
console.log(product1);

/* 
    Se usa la palabra reservada "extends" para indicar que heredarás las propiedades de la clase Padre (ProductsWestStore)
    en la clase definiva.
*/
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class ProductsEastStore extends ProductsWestStore {}

const product2 = new ProductsEastStore("Lavatrastos", 39, 250)
console.log(product2);
console.log(product2.getName) // Getter de la clase padre rehusada en la clase hijo