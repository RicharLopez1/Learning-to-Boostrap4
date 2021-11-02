//sintaxis de jquery
//$("indica un selector de html").accion


//$(document).ready(function(){//documento ha terminado de carga aqui dentro deberia ejecutar accion de jquery mas resumida igual que documnet.ready es $(function()){});
  //  $("h1").hide();
//});

$(function(){
   // $("h1").hide();
   //id #
   //class .
   // $("p").css({"background-color":"yellow"});
   // $("#segundo").css({"background-color":"blue"});
    //$(".primero").css({"background-color":"green"});
    $("#segundo").css({"background-color":"green"});

    //usaremos jquery
    $(".primero").mouseenter(function () { // hay la accion doble click dblclick para que funcione esa accion y tambie click
        // el metodomouseenter es para pasar el raton por el .primero con el hide lo ocultamos
      //  alert("Hola estoy aprendiendo jquery");
      //$("#segundo").hide();//el metodo hide es para ocultar
      $("#segundo").slideDown();
     
        
    });

    $(".primero").mouseleave(function () { 
        //el mouseleave-> sirve cuando salimos del .primero o del primer parrafo se muestra con el show
       // $("#segundo").show(); //show es para mostrar
       $("#segundo").slideUp();
        $("#segundo").css({"background-color":"green"});

          
      });

      $(".primero").animate({width:"300px"})

      //Esto para mostrar el texto mediante un boton con el metodo alert
      $("button").click(function(){
          //alert($("#segundo").text());// te muestra lo que dice el texto del segundo parrafo.

         // alert($("#segundo").html());// aca te muestra con el texto y las etiquetas dentro del texto

         //attr es atributo
         //alert($("#segundo").attr("title"));// te sale el title del html

         // para cambiar el parrafo 2

         //$("#segundo").text("Hello <strong>programadores</strong>")// te sale con etiqueta html
         //$("#segundo").html("Hello <strong>programadores</strong>")// aca sale el mensaje sin etiquetas html
         $("#segundo").prepend("Hello <strong>programadores</strong>");// el metodo append agrega mas mensajes al final y prepend agrega al inicio.


      });
  //link de video https://www.youtube.com/watch?v=rSjCJGoH-GQ
});