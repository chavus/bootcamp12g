// Mentors Table

// const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/Room4/.json"
const endpoint = "https://mentors-crud-default-rtdb.firebaseio.com"

//Save Mentor
const savePerson = (nombre, apellido) => {

    // Preparando el payload
    const personObject = {nombre, apellido}
    const personJson = JSON.stringify(personObject)

    // Creando el objeto
    var xhttp = new XMLHttpRequest();

    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText; //json
            console.log(respuesta)
            getMentorsAndRenderTable()
        }
    };

    // Configurar el verbo, la dirección
    xhttp.open("POST", endpoint + "/.json", true);

    // Enviar la solicitud
    xhttp.send(personJson);
}

// Delete records
const deleteMentor = (mentorId) => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            getMentorsAndRenderTable()
        }
    }
    xhttp.open("DELETE", endpoint + `/${mentorId}/.json`, true)
    xhttp.send()
}

//Update mentor
const updateMentor = (mentorId, mentorData) => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            getMentorsAndRenderTable()
        }
    }
    xhttp.open("PATCH", endpoint + `/${mentorId}/.json`, true)
    let mentorDataJson = JSON.stringify(mentorData)
    xhttp.send(mentorDataJson)
}


let btnGuardar = document.getElementById("btnGuardar")

btnGuardar.addEventListener("click", (myEvent) => {
    let fields = document.querySelectorAll("form input")
    let mentorObject = {}
    fields.forEach(field => {
        mentorObject[field.name] = field.value
        // mentorObject = {...mentorObject, [field.name]:field.value}
        field.value = ""
    })
    savePerson(mentorObject.name, mentorObject.lastName)
})

const getMentorsAndRenderTable = () =>{

    // Creando el objeto
    var xhttp = new XMLHttpRequest();

    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            
            // Prepare data
            let mentorsData = JSON.parse(respuesta)
            console.log(mentorsData);
            renderMentorsTable(mentorsData)

        }
    };

    // Configurar el metodo, el endpoint, etc
    xhttp.open("GET", endpoint + "/.json", true);
    // Enviar la solicitud
    xhttp.send();
}


const renderMentorsTable = (mentorsObject) => {
    let tableBody = document.querySelector("tbody")
    tableBody.innerHTML = ""

    for( mentorKey in mentorsObject){
        console.log(mentorsObject[mentorKey]);

        let mentorRow = document.createElement("tr")
        tableBody.appendChild(mentorRow)

        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentorKey))

        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentorsObject[mentorKey].nombre))

        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentorsObject[mentorKey].apellido))

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn", "btn-warning")
        deleteBtn.textContent = "Delete"
        deleteBtn.dataset.mentorIndex=mentorKey
        deleteBtn.addEventListener("click", event =>{
            let id = event.target.dataset.mentorIndex
            deleteMentor(id)
        })

        let actionsCell = mentorRow.appendChild(document.createElement("td"))
        actionsCell.classList.add("d-flex")
        actionsCell.appendChild(deleteBtn)

        let updateBtn = document.createElement("button")
        updateBtn.classList.add("btn", "btn-primary")
        updateBtn.textContent = "Update"
        updateBtn.dataset.mentorIndex=mentorKey
        updateBtn.addEventListener("click", event =>{
            let id = event.target.dataset.mentorIndex
            let fields = document.querySelectorAll("form input")
            let mentorObject = {}
            fields.forEach(field => {
                mentorObject[field.name] = field.value
                // mentorObject = {...mentorObject, [field.name]:field.value}
                field.value = ""
            })
            console.log(`Edit ${id} with `);
            console.log(mentorObject);
            updateMentor(id, mentorObject)
        })

        actionsCell.appendChild(updateBtn)

    }
}

// Render table when loading page
getMentorsAndRenderTable()