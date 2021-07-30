/*
    Crear una función que permita indicar la cantidad de koders 
    a guardar, que pida tantos nombres de koders como se indique,
    y al final imprima el nombre del koder y su número asignado
    Input: "Karen", "Xoch", "Wendy"
    output:
    Koder 1: "Karen",
    Koder 2: "Xoch",
    Koder 3: "Wendy"
*/

/*
    1. Pedir el número de koders y usarlo como parametro de la función
    2. Dependiendo del número dado pedir los nombres y guardarlos dentro de un arreglo
    3. Imprimir Koder (#): (#)nombre
*/

function printKoders(kodersQty){
    let namesArray = []
    for (i=0; i<kodersQty; i++){
        namesArray.push(prompt("Ingresa nombre: "))
    }
    for (i=0; i<kodersQty; i++){
        console.log(`Koder ${i+1}: ${namesArray[i]}`);
    }
}

function printKoders_2(kodersQty){
    let namesArray = Array(kodersQty).fill("")
    namesArray.forEach((e,i) => namesArray[i]=prompt("Ingresa nombre: "))
    namesArray.forEach((name,i) => console.log(`Koder ${i+1}: ${name}`))
}
/*
-crear una función que me permita saber el nombre de algún koder basado en su número asignado
-imprimir la lista de koders, en orden alfabético descendente
-crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
Koder 1: Israel Salinas Martínez (I. S. M.)
Koder 2: Óscar Rodríguez Hernández (O. R. H.)
.forEach
.filter
.map
.reduce
*/


var kodersArray = [
    "Israel Salinas Martinez", // 0
    "Oscar Rodriguez Hernandez", // 1
    "Salvador Jimenez Noriega",  // 2
    "Eduardo Perez Garcia" // 3
]

function koderName(number){
    // number es a partir de 1
    return kodersArray[number - 1]
}

function printListInOrder(){
    return kodersArray.sort().reverse()
}

function createNewArray(){
    for (i=0; i<kodersArray.length; i++){
        let nameArray = kodersArray[i].split(" ") // ["Israel", "Salinas", "Martinez"]
        let nameInitials= ""
        for (n=0; n<nameArray.length; n++){
            nameInitials += nameArray[n][0] + "."
            //I.S.M.
        }
        console.log(`Koder ${i+1}: ${kodersArray[i]} (${nameInitials})`);
    }
}

function createNewArray_2(){
    for (i=0; i<kodersArray.length; i++){
        let nameArray = kodersArray[i].split(" ") // ["Israel", "Salinas", "Martinez"]
        let nameInitials= ""
        nameArray.forEach(function getInitial(name){
            nameInitials += name[0] + "."
        })
        console.log(`Koder ${i+1}: ${kodersArray[i]} (${nameInitials})`);
    }
}