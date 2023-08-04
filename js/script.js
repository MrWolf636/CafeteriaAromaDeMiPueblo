$(document).ready(function(){
  //Vamos a darle efectos a nuestro menu2
  $('.menu a').each(function(index,elemento){
    $(this).css({
      'top': '-200px'
    });
    $(this).animate({
      top:'0'
    }, 2000 + (index * 500));
  });


//Efecto del header
if( $(window).width() > 800){
  $('header .textos').css({
    opacity:0,
    marginTop:0
  })
  $('header .textos').animate({
    opacity:1,
    marginTop: '-52px'
  }, 1500);
}

//Scroll elementos menu accdemos por jQuery
var acercaDe = $('#acerca-de').offset().top,
menu = $('#platillo').offset().top,
galeria = $('#galeria').offset().top,
ubicacion = $('#ubicacion').offset().top;

$('#btn-acerca-de').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: acercaDe-100
}, 500);
});

$('#btn-menu').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: menu-100
}, 500);
});

$('#btn-galeria').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: galeria-100
}, 500);
});

$('#btn-ubicacion').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: ubicacion-100
}, 500);
});
});
