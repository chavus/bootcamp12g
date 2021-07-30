const printDivisibles = () => {
    $('#card-wrapper div').remove()

    let limit = $("#limit").val()
    let divisor = $("#divisor").val()

    for( let i = 0; i < limit; i++){
        i % divisor === 0 && printCard( i )
    }

    $("#result-header").removeClass("d-none")

    $(".number-card").click( ( event ) => {
        event.stopPropagation()
        console.log( event.target)
        $(event.target).toggleClass("active")

        //call function to multiply all active
        let multResult = multiplyActives()

        $("#mult-result").text(multResult)

    })
}

const printCard = number => {
    let cardHtml = `
        <div class="col-3 my-1">
            <div class="card number-card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>${number}</h1>
                </div>
            </div>
        </div>
    `
    $("#card-wrapper").append(cardHtml)
}

const multiplyActives = () => {
    let mult = 1
    let activeCards = $("#card-wrapper .active h1")
    activeCards.each(function(){ mult *= parseInt($(this).text())})
    //return activeCards.length>0 ?  mult : "NA"
    console.log(activeCards.length);
    if(activeCards.length>0){
        $("#result-header").html('El resultado de tu selección es: <span id="mult-result"></span>')
        return mult
    }else {
        $("#result-header").html('Selecciona algunos números')

    }
}

$("#go").click( printDivisibles )

/*
-arreglar el bug de que no se reinicia la lista de números
- crear una función que obtenga el producto de todos los números seleccionados y lo agregue al encabezado
- hacer que el encabezado sólo se muestre cuan  
- permitir que los números puedan seleccionarse y deseleccionarse (*los números desactivados no deben formar parte del resultado )
*/