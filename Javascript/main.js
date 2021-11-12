//var numero, numero1,suma;
//var operador;



//numero = parseInt(prompt("Ingrese numero:"));
//numero1 = parseInt(prompt("Ingrese numero:"));

//if
/*if(numero == numero1){
    document.write("Numeros iguales");
}else if(numero>numero1){
    document.write("Numeros mayor es:"+numero);
}else {
    document.write("Numeros mayor es:"+numero1);
}*/


// switch
/*operador = prompt("Ingrese un operador: + / -");

switch(operador){
    case '+':  numero = parseInt(prompt("Ingrese numero:"));
                numero1 = parseInt(prompt("Ingrese numero:"));
                suma = numero+numero1;
                document.write("La suma es:"+suma);
                break;

     case '-':  numero = parseInt(prompt("Ingrese numero:"));
                numero1 = parseInt(prompt("Ingrese numero:"));
                suma = numero-numero1;
                document.write("La resta es:"+suma);
                break;
    default:  break; 
}*/


//for
/*
var numero = [1,2,3];
//length cantidad de numero elementos

    for( var i = 0; i <= numero.length-1;i++){
        document.write(numero[i]+ "<br>");
    }
    */

    //Funciones

/*function Mostrarmensaje(mensaje)
{
    document.write("Tu nombre eS:"+mensaje);
}

Mostrarmensaje("Richar");*/
function suma(n1,n2){
    var n1  = parseInt(document.getElementById("numero1").value);
    var n2  = parseInt(document.getElementById("numero2").value);

    var resultado = n1+n2;

    return resultado;
}




