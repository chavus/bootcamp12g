// // alert("Hello Koders from alert!") // Send an alert -> window.log()

// console.log("Hello from console")
// console.error("This is an error")
// console.warn("Warning")

// /*
//     Asignment operator
//     = -> Asignación
//     += Adición
//     -= Sustracción
//     *= Multiplicación
//     /= División
//     %= Modulo
// */

// var foo //Declaración
// foo = "Lestat" //Asignación
// var foo2 = "Dracula" // Declaración asignante

// // var name = prompt("Ingresa tu nombre")
// // var lastName = prompt("Ingresa tu apellido")
// // var age = 34
// // console.log(typeof(name))
// // console.log(typeof(age))
// // console.log(name + ' ' +  lastName)

// var x = 5
// var y = 7
// console.log( x + y)
// console.log( x - y)
// console.log( x * y)
// console.log( x / y)

// var z = "37"

// console.log( x + z) // will print a string 537

// /*
// Operadores de comparación 
// == Comparación
// === Extrema comparación (considera tipos)
// !=, !== Diferente
// >= 
// <= 
// */

// var testNumber = 12
// var testStringNumber = "12"

// console.log(testNumber == testStringNumber);
// //True
// console.log(testNumber === testStringNumber)
// //False considers type

// var string1 = "holaa"
// var string2 = "holab"

// console.log(string1 > string2) 
// //Returns false, it checks the key code a= 65 and b=67

/*ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números*/
var num1 = Number(prompt("Dame un numero"))
var num2 = Number(prompt("Dame otro numero"))
console.log(`${num1} + ${num2}: ${num1+num2}`);
console.log(`${num1} - ${num2}: ${num1-num2}`);
console.log(`${num1} * ${num2}: ${num1*num2}`);
console.log(`${num1} / ${num2}: ${num1/num2}`);
console.log(`${num1} % ${num2}: ${num1%num2}`);
alert(
    `${num1} + ${num2}: ${num1+num2}\n
    ${num1} - ${num2}: ${num1-num2}\n
    ${num1} * ${num2}: ${num1*num2}\n
    ${num1} / ${num2}: ${num1/num2}\n
    ${num1} % ${num2}: ${num1%num2}`
    )

/*
    ejercicio 2:
    pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo
*/
alert(`${num1} es mayor que ${num2}?: ${num1>num2}`)

/*
    ejercicio 3:
    pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto
    */
var char1 = prompt("Primera letra")
var char2 = prompt("Segunda Letra")
alert(`${char1} está antes que ${char2} en el alfabeto?: ${char1<char2}`)