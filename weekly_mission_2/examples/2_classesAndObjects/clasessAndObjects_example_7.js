/*--
    --- CLASES & OBJETOS - SETTERS ---
    Los Setters para modificar los atributos del objeto
--*/

class DataCar {
    constructor(brand, models) {
        this.brand = brand
        this.models = models
        this.mileage = 0;
        this.yearsOfUse = 0;
    }

    get getMileage() {
        return this.mileage
    }

    get getYearsOfUse() {
        return this.yearsOfUse
    }

    set setMileage(newMileage) {
        this.mileage = newMileage
    }

    set setYearsOfUse(newYearsOfUse) {
        this.yearsOfUse = newYearsOfUse
    }
}


console.log("Setters para modificar los atributos del objeto");
const updateDataCar = new DataCar("Chevrolet", "Camaro")

console.log(updateDataCar.getMileage) // 0 Por default
console.log(updateDataCar.getYearsOfUse) // 0 Por default

// Actualizamos los atributos por medio de los setters
updateDataCar.setMileage = 1549
updateDataCar.setYearsOfUse = 2

console.log("*****************************")
console.log("Setters modificados")
console.log(updateDataCar.getMileage) 
console.log(updateDataCar.getYearsOfUse) 