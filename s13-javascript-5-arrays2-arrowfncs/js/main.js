//Deconstructuring
let myObject2 = {
    name2:"Chava",
    age2:34
}

let {name2, age2} = myObject2
console.log(name2, age2);

//Deconstructuring with new names
let myObject = {
    name:"Chava",
    age:34
}

let {name:myName, age:myAge} = myObject
console.log(myName, myAge);

//Constructuring
let lastName = "Jimenez"
let city = "GDL"

let myObject3 = {lastName, city}
console.log(myObject3);

//Constructuring with new names
let lastName2 = "Jimenez"
let city2 = "GDL"

let myObject4 = {myLastName: lastName, myCity: city}
console.log(myObject4)


/* mentorsArray = [
    {
        name:"Israel",
        lastName:"salinas"
    }...{...}
]*/

let dataArray = [
    [
        "Israel",
        "Salinas Martínez"
    ],
    [
        "David",
        "Cermeño Moranchel"
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

let createArrayObjects = (array) => {
    mentorsArray = [] 
    array.forEach((element) => {
        mentorsArray.push(
            {name:element[0],
            lastName:element[1]}
        )
    });
    return mentorsArray
}

console.log(createArrayObjects(dataArray))

