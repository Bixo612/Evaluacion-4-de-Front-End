//import logo from './logo.svg';
import ListadoResultados from './listadoProductos';
//permite actualizar la pagina
import { useState } from 'react';
import './App.css';
import guitarras from './assets/img/guitarras.jpg'
import ukuleles from './assets/img/ukuleles.jpg'

function App() {

   //useState inicializa con arreglo vacío la  variable de estado operaciones
   const [operaciones, setOperacion] = useState([])

   function agregarCarro(event) {
      //prevent default evita que el submit envie los vaores a otra pagina y taget los pase a la funcion
      event.preventDefault();
      const codigo = event.target.txt_codigo.value.toUpperCase();
      const articulo = event.target.sel_articulo.value
      const descripicion = event.target.txt_descripicion.value
      const precio = parseFloat(event.target.txt_precio.value)
      const cantidad = parseFloat(event.target.num_cantidad.value)
      const total = cantidad * precio
      const totalDescuento = Math.trunc(total * 0.9)
      //validaciones
      if (codigo.length < 3 || codigo.length > 6) {
         alert("El codigo debe contener entre 3 y 6 caracteres")
         return false;
      }
      if (articulo == "") {
         alert("Debe selecionar un articulo")
         return false;
      }
      if (descripicion == "") {
         alert("Debe ingresar una descripicion")
         return false;
      }
      if (isNaN(precio)) {
         alert("El precio debe ser ingresado en numeros")
         return false;
      }
      if (precio <= 0) {
         alert("El precio debe ser mayor a 0")
         return false;
      }
      if (isNaN(cantidad)) {
         alert("Debe ingresar una cantidad")
         return false;
      }
      if (cantidad <= 0) {
         alert("la cantidad debe ser 1 o mas")
         return false;
      }
      //se crea un objeto nuevo con los resultados y datos obtenidos del formulario
      const nuevo = {
         codigo_: codigo,
         articulo_: articulo,
         descripicion_: descripicion,
         precio_: precio,
         cantidad_: cantidad,
         total_: total,
         totalDescuento_: totalDescuento
      }
      //modifica el estado de useState con el nuevo objeto
      setOperacion([...operaciones, nuevo])
      event.target.txt_codigo.value = ''
      event.target.sel_articulo.value = ''
      event.target.txt_descripicion.value = ''
      event.target.txt_precio.value = ''
      event.target.num_cantidad.value = ''
   }

   return (
      <div className="container">
         <header>
            <nav class="navbar bg-light">
               <div class="container-fluid">
                  <h1>Guitar Store Chile</h1>
               </div>
            </nav>
         </header>
         <body>
            <div className="row g-3">
               <div className="col-md-12 col-lg-6">
                  <img src={guitarras} className="img-thumbnail" />
               </div>
               <div className="col-md-12 col-lg-6">
                  <img src={ukuleles} className="img-thumbnail" />
               </div>
            </div>
            <div className="row g-3">
               <div class="col-xs-12 col-sm-6">
                  <h3> </h3>
                  <form onSubmit={agregarCarro}>
                     {/* Codigo */}
                     <label for="txt_codigo">Codigo</label>
                     <input type="text" name="txt_codigo" id="txt_codigo" className="form-control" />
                     <div id="emailHelp" className="form-text">Debe contener entre 3 y 6 caracteres</div>
                     {/* Articulo */}
                     <label for="sel_articulo">Articulo</label>
                     <select className="form-select" name="sel_articulo" id="sel_articulo">
                        <option selected value="">Selecione articulo</option>
                        <option value="Guitarra">Guitarra</option>
                        <option value="Ukulele">Ukulele</option>
                        <option value="Charango">Charango</option>
                        <option value="Charango">Charango</option>
                        <option value="Bajo">Bajo</option>
                     </select>
                     {/* Descripcion */}
                     <label for="txt_descripicion">Descripcion</label>
                     <input type="text" name="txt_descripicion" id="txt_descripicion" className="form-control" />
                     <div className="row">
                        <div class="col">
                           {/* Precio */}
                           <label for="txt_precio">Precio</label>
                           <div className="input-group mb-3">
                              <span className="input-group-text" id="basic-addon1">$</span>

                              <input type="text" name="txt_precio" id="txt_precio" className="form-control" />
                           </div>
                        </div>
                        <div class="col">
                           {/* Cantidad */}
                           <label for="num_cantidad">Cantidad</label>
                           <input type="number" name="num_cantidad" id="num_cantidad" className="form-control" placeholder='0' />
                        </div>
                     </div>
                     {/* Total */}
                     {/* Total descuento */}
                     <br />
                     <div className="btn-group" role="group" aria-label="Basic example">
                        <input type="submit" className='btn btn-success' value="Agregar al carro" />
                        <input type="reset" className='btn btn-danger' value="Limpiar" />
                     </div>
                  </form>
               </div>
            </div>
            <hr />
            <table className="table table-striped">
               <thead>
                  <tr>
                     <th scope="col">Codigo</th>
                     <th scope="col">Articulo</th>
                     <th scope="col">Descripcion</th>
                     <th scope="col">Precio</th>
                     <th scope="col">Cantidad</th>
                     <th scope="col">Total</th>
                     <th scope="col">Total descuento</th>
                  </tr>
               </thead>
               <ListadoResultados resultados={operaciones} />
            </table>
         </body>
      </div>
   );
}

export default App;