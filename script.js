let botao = document.getElementById('botao')
let divImg = document.getElementById('div-img')


$( "#botao" ).mouseenter(function() {

    $( "body" ).css("background-color", "green")
    $( "#div-img" ).css("visibility", "visible")
  });

  $( "#botao" ).mouseleave(function() {
    $( "body" ).css("background-color", "#5d5d5d")
    $( "#div-img" ).css("visibility", "hidden")
  });