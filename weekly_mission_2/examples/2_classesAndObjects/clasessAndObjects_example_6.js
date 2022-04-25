/*--
    --- CLASES & OBJETOS - GETTERS ---
    Los Getter para acceder a los atributos del objeto
--*/

class carWash {
    constructor(clientName, ticketNumber,  ){
        this.clientName = clientName
        this.ticketNumber = ticketNumber
        this.cars_cleaned = 20
        this.cars_toClean = 120
    }

    get getCarsCleaned() {
        return this.cars_cleaned
    }
}

console.log("Getters para acceder a los atributos del objeto");
const statusCarWash = new carWash("Carlos", 5); 
console.log(statusCarWash.getCarsCleaned);
