$(document).ready(function(){
    // Agrego scrollspy al body
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Agrego desplazamiento suave en todos los enlcesdentro del navbar
    $("#myNavbar a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        // Almaceno el hash
        var hash = this.hash;
  
        // metodo de jQuery's animate() para desplazamiento suave
        // Numero de milisengundos que tarda el area en desplazarse
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Agrego hash (#) a la URL cuando termine de desplazarse
          window.location.hash = hash;
        });
      } 
    });
  });
  