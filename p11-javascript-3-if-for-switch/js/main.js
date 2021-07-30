/*1.
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5
-- Returns the number of vowels(including with accents) that 
the string has
*/

function numberOfVowels1(string){
    var resultsArray = string.toLowerCase().match(/[aeiouáéíóú]/g)
    return resultsArray ? resultsArray.length : 0
}

function numberOfVowels2(string){
    var extendedVowels = "aeiouáéíóú"
    var counter = 0
    for (i=0; i<string.length; i++){
        if (extendedVowels.includes(string[i])){
            counter += 1
        }
    }
    return counter
}
/*
2.
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9
-- Count the words
*/

function countWords(string){
    //Remove extra spaces
    //Don't count punctuation symbols
    return string.split(" ").length
}


/*
3.
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false
//Palindromo
*/
function palindrome(string){
    reformatedString = string.toLowerCase().replaceAll(" ","")
    reversedString = ""
    for (i=reformatedString.length-1; i>=0; i--){
        reversedString += reformatedString[i]
    }
    return reformatedString == reversedString
}


/*
4.
Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula
Devolver true si el string cumple con las reglas, o imprimir en consola la regla o reglas que no se están cumpliendo
*/

function checkString(string){
    brokenRules=[]
    if (string.length<8){
        brokenRules = brokenRules.concat("Less than 8 chars")
    }
    if (!string.match(/\d/g)){
        brokenRules = brokenRules.concat("No numbers")
    }
    if (!string.match(/[A-Z]/g)){
        brokenRules = brokenRules.concat("No upper case")        
    }

    return brokenRules.length ? console.log(brokenRules.toString()) :true

}

/*
Pilón:
crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx
*/

function createRandom(n){
    randomWord=""
    if (n>94){
        console.log("Number has to be less than 95");
        return false
    }
    while (randomWord.length < n){
        var char = String.fromCharCode(Math.random() * (126 - 32) + 32)
        if (!randomWord.includes(char)){
            randomWord += char
        }
    }
    return randomWord
}

function createRandom_2(n){
    if (n>94){
        console.log("Number must be smaller than 95");
        return false
    }
    randomString = ""
    for (i=0; i<n; i++){
        var newChar =addRandom(randomString)
        // newChar ? randomString += newChar : false
        randomString += addRandom(randomString)
    }
    return randomString
}

function addRandom(string){
    var char = String.fromCharCode(Math.round(Math.random() * (126 - 32) + 32))
    if (!string.includes(char)){
        return char
    } else{
        return addRandom(string)
    }
}
