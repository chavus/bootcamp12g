/* Crear una función que me diga si un string comienza con vocal, consonante, número o un caracter especial
*/

function typeOfFirst(string){
    var vowels = ["a", "e", "i", "o", "u"]
    // Letters char codes: 65 - 90 97 - 122(lower)
    // Numbers char codes 48 -57
    var firstCharCode = string.toLowerCase().charCodeAt(0)
    if (firstCharCode>=97 & firstCharCode<=122){ // Check if in alphabet
        if (vowels.includes(string[0])){
            return "vowel"
        }else{
            return "consonant"
        }
    } else if(firstCharCode>=48 & firstCharCode<=57){ // Check if number
        return "number"
    } else {
        return "special character"
    }
}

/*
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false
*/

function firstLetterRepeats(string){
        var counter = 0
        for (i=1; i<string.length; i++){
            if (string[i] == string[0]){
                counter += 1
            }
        }
        return counter > 0 ? true: false
}

// function firstLetterRepeats2(string){

// }