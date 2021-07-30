// Recibir el nombre completo de un usuario ( en un sólo string ) y convertir las palabras pares a mayusculas y las nones a minúsculas

function reNameUpper(fullName){
    nameArray = fullName.split(" ")
    var newName = ""
    for (i=0; i<nameArray.length; i++){
        if ((i+1)%2 == 0){
            newName = newName.concat(nameArray[i].toUpperCase(), " ")
        } else{
            newName = newName.concat(nameArray[i], " ")
        }
    }
    return newName.trim()
}

var fullName = prompt("Ingresa tu nombre completo")
alert(reNameUpper(fullName))