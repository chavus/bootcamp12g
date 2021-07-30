$(document).ready(()=>{
    // Get element, Selectors
    $('h1').html("Texto desde jquery - tag");
    $('.h1-class').html("Texto desde jquery - class")
    $('#my-h1').html("Texto desde jquery - id")

    // Add attributes
    $('h1').attr({'data-my-data':'2'})

    $('h1').addClass('my-class')
    $('h1').addClass('my-class')


    $('p').hide()

    console.log($('input').val());

    myli = $(document.createElement('li'))
    myli.text("text")
    $(myli).appendTo('ul');
    // 
})