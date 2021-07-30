/* --------
ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"
--------- */

function largerString(string1, string2){
    if (string1.length>string2.length){
        return string1
    }else{
        return string2
    }
}

/*ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"
--------- */

function convertToAlternateCase(string){
    var convertedString = ""
    for (i=0; i<string.length; i++){
        if ((i+1)%2 == 0){
            convertedString = convertedString.concat(string[i].toLowerCase())
        }else{
            convertedString = convertedString.concat(string[i].toUpperCase())
        }
    }
    return convertedString
}

/*ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"
--------*/

function invertString(string){
    var invertedString = ""
    for (i=string.length-1; i>=0; i--){
        invertedString = invertedString.concat(string[i])
    }
    return invertedString
}


//Main
var selection
while (selection != 99){
    selection = Number(prompt("Choose the excercise #: 1 to 3 (or 99 to exit"))
    switch (selection){
        case 1:
            var string1 = prompt("Enter string 1")
            var string2 = prompt("Enter string 2")
            alert(`El string: "${largerString(string1, string2)}" es el más largo.`)
                        break
        case 2:
            string3 = prompt("Enter a string to convert to alternate case:")
            alert(`Your converted string is: ${convertToAlternateCase(string3)}`)
            break
        case 3:
            string4 = prompt("Enter a string to invert:")
            alert(`Your inverted string is: ${invertString(string4)}`)
            break
        case 99:
            alert("See you soon!")
            break
    }
}