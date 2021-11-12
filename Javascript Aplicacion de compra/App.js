class Producto{
    constructor(nombre1,precio1,año1){
        this.nombre = nombre1;
        this.precio= precio1;
        this.año = año1;
    }
}

class UI{
    AgregarProducto(producto){
      const productList = document.getElementById('product-list');
      const element = document.createElement('div'); // se crea un elemento html div dentro del div agregar producto, ya diseñado se le dara al product-list, se encunetra div vacio
      //diseñado elemntos del html para el product list
      element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto</strong> : ${producto.nombre}
                <strong>Precio</strong> : ${producto.precio}
                <strong>Año</strong> : ${producto.año}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;

         //insertar elementos hijo html
         productList.appendChild(element);
         //this.resetForm();//de esta clase llamamos el metodo resetform

    }
    resetForm(){
        document.getElementById('product-form').reset();
    }

    EliminarProducto(element){
        //ponemos como paramentro element para que reciba una etiqueta de html <a> comprobar para eliminar algo, para comprobar si este elemento estamos pasando es el enlace a
        if(element.name === 'delete'){ // si el elemento tiene la propiedad delete le a dado click quiere borrar todo el elemento, borraremos solo tarjeta o el padre.
        // porque el padre es el product list,el hijo la tarjeta y el enlace a
          //console.log(element.parentElement.parentElement.parentElement.remove()) // esto es para ver que elemento padre tiene, con parentElement subimos, hasta llegar al div,despues remove para eliminar.
          element.parentElement.parentElement.parentElement.remove();
          this.MostrarMensaje('Producto Eliminado Satisfactoriamente', 'danger');

        }
    }

    MostrarMensaje(mensaje, cssboot){
        const div = document.createElement('div');
        div.className = `alert alert-${cssboot} mt-2`; //concatenacion en javascript ${cssboot}
        div.appendChild(document.createTextNode(mensaje));  // dentro del div agregamos un elemento hijo, crear un texto textNode
        //Monstrando en  el DOM
        const container = document.querySelector('.container'); // selecciona la clase container
        const app = document.querySelector('#App');
        container.insertBefore(div, app);// dentro del contenedor vamos a insertar div antes del app
        setTimeout(function(){  //sitTemieout recibe una funcion y cuantot tiempo quieres
            document.querySelector('.alert').remove();//todas clases comienza con alert seran removidas
        },2000);
    }
}
//DOM Events
//Eventos del DOM Document Object Model
//boton guardar capturar quiero obtener el elemento id del formulario, quiero capturar evento submit, para capturar un evento metodo AddEventlistener, se encarga de capturar muchos elementos del formulario, cuando capturar quiero ejecutar algo a traves de una funcion.

//yo quiero obtener los datos de este formulario
document.getElementById('product-form').addEventListener('submit',function(e){
  //console.log(document.getElementById('name').value) // quiero obtener el valor del nombre
  //guardamos en una constance
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;

  //console.log(name,price,year);// visualizamos por consola

  //console.log(new Producto(name,price,year))// creamos en un objeto de la clase producto
   //guardamos en una constante
  const producto = new Producto(name,price,year);

  //para mostrar de la clase UI

  const ui =  new UI(); // instanciando la clase UI con el objeto ui
  if(name === '' || price === '' || year === ''){
     return ui.MostrarMensaje('Completes los campos Por favor!!!','danger')// solo para que me retorne esto, termina con la funcion ya no continua con el resto de codigo
  }

  ui.AgregarProducto(producto);
  ui.resetForm();
  ui.MostrarMensaje('Producto Agregado Satisfactoriamente', 'success');
  

  // para cancelar la refrescacion de la pagina cuando se da click el boton, capturar dato evento o letra e
  e.preventDefault();
});

//quiero capturar el evento click para el delete
document.getElementById('product-list').addEventListener('click',function(e){
    //el e en la funcion es el objeto del evento a capturar
    //estamos verificando que elementos estamos recibiendo con el target
   // console.log(e.target);
    const ui = new UI();
    ui.EliminarProducto(e.target);

});