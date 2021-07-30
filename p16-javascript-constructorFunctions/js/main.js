// Usar el array
let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

let dataArray2 = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]
// para crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor, una propiedad con sus inciales y un método que al ser invocado devuelva el string "hola, soy {nombre} {apellidos}"
// los objetos deben estar dentro de una colección llamada mentorsArray
 
const getInitials = aString => aString
    .split(" ")
    .reduce((acc,curr) => 
        acc += curr[0] + ".","")
 
function Mentor([name, lastName, ...scores]) { 
    
    let scoresObject = scores.reduce((accum, curr)=>{
        let [key, val] = curr.split(":")
        return {...accum, [key]:Number(val)}
    }, {})
    console.log(scoresObject);

    this.name = name
    this.lastName = lastName
    this.initials = (name + " " + lastName).split(" ")
                                            .reduce((acc,curr) => 
                                            acc += curr[0] + ".","")
    this.sayHi = () => `Hola, soy ${this.name} ${this.lastName}`
    this.getScore = materia => scoresObject[materia]
    this.getAverage = () => scores.reduce((acc,curr) => acc + Number(curr.split(":")[1]),0)/scores.length
}

let mentorsArray = dataArray2.map(mentor => new Mentor(mentor)) // mentor[0], mentor[1] -> (...mentor)

let a = ["HTML:9",
"CSS:10",
"JS:7"]

console.log(a.reduce((accum, curr)=>{
    return accum + Number(curr.split(":")[1])
},0))


