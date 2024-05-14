//1 Ejercicio 1: Extraer la empleada Ana y el email de Luis
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const empleadoAna = empleados.find(empleado => empleado.name === "Ana");
console.log(empleadoAna);

// Extraer el email de Luis
const [luis] = empleados;
const { email: emailLuis } = luis;
console.log(emailLuis);

//Extraer los emails de los empleados
const pokemon = {
    nombrePok: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const { nombrePok, type, moves } = pokemon;
console.log(nombrePok);
console.log(type);
console.log(ability);

const [, tackle] = moves;
console.log(tackle);

//2 Ejercicios spread/rest
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const mergedPokemon = {
    ...pokemon,
    ...pikachu,
    moves: [...pokemon.moves, ...pikachu.moves],
    stats: {
        ...pokemon.stats,
        ...pikachu.stats
    }
};

console.log(mergedPokemon);

//3 Ejercicio 3: Crear una funcion sumEveryOther que tome un numero variable de argumentos y devuelva la suma de todos los argumentos
// funsion sumEveryOther
function sumEveryOther(...args) {
    return args.reduce((sum, current) => sum + current, 0);
}
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

//addOnlyNumbers

function addOnlyNums(...args) {
    return args.filter(arg => typeof arg === 'number').reduce((sum, num) => sum + num, 0);
}

console.log(addOnlyNums(1, 'perro', 2, 4));

//countTheArgs
function countTheArgs(...args) {
    return args.length;
}

console.log(countTheArgs('gato', 'perro'));
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso'));

///
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));

//exstra

