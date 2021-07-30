// document.querySelector(".,#, tag")
// document.querySelectorAll(".,#, tag")

// Get elements
let elementByQuery = document.querySelector('nav') 
console.log(elementByQuery);

let elementByQueryAll = document.querySelectorAll('nav') // Return a nodeList, which is iterable 
console.log(elementByQueryAll);

let navElements = document.getElementsByTagName('nav') // Return a HTMLCollection, which not iterable
console.log(navElements)

let aElement = document.getElementById('elemento-1')
console.log(aElement);

let aElementByClass = document.getElementsByClassName("elemento-2-class")
console.log(aElementByClass);


//Create and append elements

let myNewParragraph = document.createElement('p')
let myBody = document.querySelector('body')
myBody.appendChild(myNewParragraph)

let myNewParragraph2 = document.createElement('p')

let myNav = document.querySelector('nav')
myBody.insertBefore(myNewParragraph2, myNav)

// Modify elements

let myText = document.createTextNode("This is my text")
let myText2 = document.createTextNode("This is my text222")

myNewParragraph.appendChild(myText)
myNewParragraph2.appendChild(myText2)
// myNewParragraph.textContent = "Changes text"
// myNewParragraph.textContent = "My Text content"


let killers = ["jason", "freddy", "chucky"]
let scriptElement = document.querySelector('script')
killers.forEach(killer => {
    let myP = document.createElement('p')
    myP.textContent = killer
    myBody.appendChild(myP) // NOTE appendChild returns the appended element
    // myBody.insertBefore(myP, scriptElement)
})
