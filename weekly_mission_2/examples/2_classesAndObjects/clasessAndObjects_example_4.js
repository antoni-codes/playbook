/*--
    --- CLASES & OBJETOS - MÉTODOS EN LOS OBJETOS ---
--*/

class VideoGame {
    constructor(title, year, developer) {
        this.title = title
        this.year = year
        this.developer = developer
    }

    getInfo() {
        return `The Videogame ${this.title} from ${this.year} development by ${this.developer}`
    }
}

console.log("Este es un método dentro de los objetos");
const infoVideoGame = new VideoGame('Halo 3', 2007, 'Bungie')

console.log(infoVideoGame.getInfo());
