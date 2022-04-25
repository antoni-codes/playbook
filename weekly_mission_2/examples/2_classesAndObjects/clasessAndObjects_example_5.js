/*--
    --- CLASES & OBJETOS - ATRIBUTOS CON VALORES POR DEFAULT ---
--*/

class Image {
    constructor(name, format, author,) {
        this.name = name;
        this.format = format;
        this.author = author;
        this.dateCreated = new Date(); // Esto guardará la fecha actual en que se instancia el objeto
    }

    getInfo() {
        return `The image "${this.name}" with format "${this.format}" by the author "${this.author}", was created on "${this.dateCreated}"`
    }

}

console.log("Este es un atributo con valores por default");
const myImageJpg = new Image("profile", "jpg", "antonicodes") 
console.log(myImageJpg.getInfo());

console.log("**************************************");
// Puedes instanciar "n" cantidad de objetos de la misma clase
const myImagePng = new Image("portrait-img", "png", "antonicodes")
console.log(myImagePng.getInfo());
