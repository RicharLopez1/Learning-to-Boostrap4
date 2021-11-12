
class Persona{
   //propiedades es mejor usar constructor
   //metodos
   constructor(nombre, dni){ // en el constructor van las propiedades, me van mandar datos desde  afuera
        this.uno = nombre;
        this.dos = dni;
        this.tres = "Hola a todos";
   };
   //METODO no es necesario poner function

   miMetodo(){
        return this.uno;
   };

};
var objPersona = new Persona("Richar",75212540);

document.write("Mi nombre es:"+objPersona.uno+"<br>");
document.write("Mi dni es:"+objPersona.dos+"<br>");
document.write("<h1>"+objPersona.miMetodo()+"<br>"+"</h1>")
document.write("Mensaje:"+objPersona.tres);