const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]


console.log("Nombre de cada explorer con FOR EACH")
explorers.forEach((name) => console.log(name.name))

console.log("****************************")
console.log("Stack de cada explorer con FOR EACH")
explorers.forEach((stacks) => console.log(stacks.stack))


console.log("****************************")
console.log("Lista de Stacks de cada explorer con MAP")
const listStacks = explorers.map((stacks) => stacks.stack)
console.log(listStacks)


console.log("****************************")
console.log("Lista de explorers que su stack incluye 'js' usando FILTER & INCLUDES para validar un elemento ")
const stackIsJs = listStacks.filter((stack) => stack.includes('js'));
console.log(stackIsJs)

console.log("****************************")
console.log("Primer explorer que sea de la CDMX con FILTER");
const explorerFromCDMX = explorers.find((explorer) => explorer.city === 'CDMX')
console.log(explorerFromCDMX)


console.log("****************************")
console.log("Muestra la Suma de todos los exercises_completed con REDUCE");
const totalExercises = explorers.reduce((keep, exercises) => keep + exercises.exercises_completed, 0)
console.log(totalExercises)


console.log("****************************")
console.log("Obtener la validación si al menos 'uno' de los explorers tiene la propiedad 'exercisesFinished' de frontend como true, usando SOME'");
const missions = explorers.map((exercise) => exercise.missions.frontend.exercisesFinished)
const ifHasExercisesFinish = missions.some((mission) => mission === true)
console.log(ifHasExercisesFinish)


console.log("****************************")
console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true, usando EVERY");
const isFinished = explorers.map((finished) => finished.missions.onboarding)
const ifAllHave = isFinished.every((finished) => finished === true)
console.log(ifAllHave);