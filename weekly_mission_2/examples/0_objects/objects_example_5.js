/*--
    --- OBJETO QUE RECIBE PARÁMETROS ---
    Este es un objeto con métodos (Funciones) dentro que recibe
    parámetros.
--*/

const objectParameters = {
    car: 'Ferrari',
    year: '2014',
    velocity: (kmh) => {
        console.log(`Tu velocidad es de ${kmh} Km/h`);
    }
}


console.log("Este es un objeto que recibe parámetros dentro del método");
objectParameters.velocity(130)