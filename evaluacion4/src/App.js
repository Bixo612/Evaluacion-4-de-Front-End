//import logo from './logo.svg';
import ListadoResultados from './listadoProductos';
//permite actualizar la pagina
import { useState } from 'react';
import './App.css';


function App() {

  //useState inicializa con arreglo vacío la  variable de estado operaciones
  const [operaciones, setOperacion] = useState([])

  function agregarCarro(event) {
    //prevent default evita que el submit envie los vaores a otra pagina y taget los pase a la funcion
    event.preventDefault();
    const codigo = event.target.txt_codigo.value
    const articulo = event.target.txt_articulo.value
    const descripicion = event.target.txt_descripicion.value
    const precio = parseFloat(event.target.txt_precio.value)
    const cantidad = parseFloat(event.target.txt_cantidad.value)
    const total = cantidad * precio
    const totalDescuento = total * 0.9
    /*
    const lado_a = parseFloat(event.target.txt_valor_a.value)
    const lado_b = parseFloat(event.target.txt_valor_b.value)
    const area = lado_a * lado_b
    */
    //se crea un objeti neuvo con los resultados y datos obtenidos del formulario

    const nuevo = {
      codigo_: codigo,
      articulo_: articulo,
      descripicion_: descripicion,
      precio_: precio,
      cantidad_: cantidad,
      total_: total,
      totalDescuento_: totalDescuento
      /*
      valor1: lado_a,
      valor2: lado_b,
      resultado: area
      */
    }
    //modifica el estado de useState con el nuevo objeto
    setOperacion([...operaciones, nuevo])
    event.target.txt_codigo.value = ''
    event.target.txt_articulo.value = ''
    event.target.txt_descripicion.value = ''
    event.target.txt_precio.value = ''
    event.target.txt_cantidad.value = ''
    /*
    event.target.txt_valor_a.value = ''
    event.target.txt_valor_b.value = ''
    */
  }

  return (
    <div className="container">
      <header>
        <h1>Titulo</h1>
      </header>
      <body>
        <div className="row g-3">
          <div class="col-xs-12 col-sm-6">
            <h2>Formulario </h2>
            <form onSubmit={agregarCarro}>
              {/* Codigo */}
              <label for="txt_codigo">Codigo</label>
              <input type="text" name="txt_codigo" id="txt_codigo" className="form-control" />
              {/* Articulo */}
              <label for="txt_articulo">Articulo</label>
              <input type="text" name="txt_articulo" id="txt_articulo" className="form-control" />
              {/* Descripcion */}
              <label for="txt_descripicion">Descripcion</label>
              <input type="text" name="txt_descripicion" id="txt_descripicion" className="form-control" />
              {/* Precio */}
              <label for="txt_precio">Precio</label>
              <input type="text" name="txt_precio" id="txt_precio" className="form-control" />
              {/* Cantidad */}
              <label for="txt_cantidad">Cantidad</label>
              <input type="number" name="txt_cantidad" id="txt_cantidad" className="form-control" />
              {/* Total */}
              {/* Total descuento */}
              <br />
              <input type="submit" className='btn btn-primary' value="Calcular área rectangulo" />
            </form>
          </div>
          <div className="col-xs-12 col-sm-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Codigo</th>
                  <th scope="col">Articulo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Con descuento</th>
                </tr>
              </thead>
                <ListadoResultados resultados={operaciones} />
            </table>
          </div>
        </div>
      </body>
    </div>
  );

  /*
      return (
          <div> 
              <div className='container'>
                  <form onSubmit={agregarCarro}>
  
                      <h2>Cálculo área rectangulo</h2>
                      <div className='row'>
                          <div className='col-xs-12 col-sm-6'>
                              Ingrese lado A:
                              <input className='form-control' type="text" name='txt_valor_a' /><br />
                          </div>
                          <div className='col-xs-12 col-sm-6'>
                              Ingrese lado B:
                              <input className='form-control' type="text" name='txt_valor_b' /><br />
                          </div>
                          <input type="submit" className='btn btn-primary' value="Calcular área rectangulo" />
                      </div>                    
                      <ListadoResultados resultados={operaciones} />
                  </form>
              </div>
  
          </div>
      );*/
}

export default App;
