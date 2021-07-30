//Counter
let [downBtn, upBtn] = document.querySelectorAll(".container div button")
let display = document.querySelector(".container p")
let counter = 0

//Method 1
upBtn.addEventListener("click", ()=>{
    counter ++
    display.textContent = counter
})

downBtn.addEventListener("click", ()=>{
    counter --
    display.textContent = counter
})

//Method 2 - Event bubbling
// document.querySelector(".container").addEventListener("click", clickEvent =>{
//     console.log(clickEvent.target.textContent);
//     if (clickEvent.target.textContent == "Incrementar"){
//         counter ++
//     } else if(clickEvent.target.textContent == "Decrementar"){
//         counter --
//     }
//     display.textContent = counter
// })


// Add records to array and table
// Delete records

let btnGuardar = document.getElementById("btnGuardar")

let mentorsArray = [
    {"name": "Juan", "lastName": "Perez"}, 
    {"name": "Pedro", "lastName": "Lopez"}] //[]

btnGuardar.addEventListener("click", (myEvent) => {
    let fields = document.querySelectorAll("form input")
    let mentorObject = {}
    fields.forEach(field => {
        mentorObject[field.name] = field.value
        // mentorObject = {...mentorObject, [field.name]:field.value}
        field.value = ""
    })
    mentorsArray.push(mentorObject)
    renderMentorsTable(mentorsArray)
})

const renderMentorsTable = (mentorsArray) => {
    let tableBody = document.querySelector("tbody")
    tableBody.innerHTML = ""
    mentorsArray.forEach((mentor, index) =>{
        let mentorRow = document.createElement("tr")
        tableBody.appendChild(mentorRow)

        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(index))

        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentor.name))

        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentor.lastName))

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn", "btn-warning")
        deleteBtn.textContent = "Delete"
        deleteBtn.dataset.mentorIndex=index
        deleteBtn.addEventListener("click", event =>{
            let index = Number(event.target.dataset.mentorIndex)
            mentorsArray.splice(index,1)
            renderMentorsTable(mentorsArray)
        })

        mentorRow
        .appendChild(document.createElement("td"))
        .appendChild(deleteBtn)
    })
}

renderMentorsTable(mentorsArray)

// Bubbling vs capturing
// Event bubbling (default)
document.querySelector('#outermost-b').addEventListener('click', e => {
    console.log('OuterMostB div is clicked');
    // console.log(e.target);
 }, false);
document.querySelector('#outer-b').addEventListener('click', e => {
    console.log('OuterB div is clicked');
    // console.log(e.target);
 }, false);
 document.querySelector('#inner-b').addEventListener('click', e => {
    console.log('InnerB div is clicked');
    e.stopPropagation()
 });

 // Event capturing
 document.querySelector('#outer-c').addEventListener('click', e => {
    console.log('OuterC div is clicked');
 }, true);
 document.querySelector('#inner-c').addEventListener('click', e => {
    console.log('InnerC div is clicked');
 }, true);