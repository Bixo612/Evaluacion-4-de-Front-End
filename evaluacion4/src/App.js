//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Titulo</h1>
      </header>
      <body>
        <div className="row g-3">
          <div class="col-xs-12 col-sm-6">
            <h2>Formulario </h2>
            <form>
              {/* Codigo */}
              <label for="txt_codigo">Codigo</label>
              <input type="text" name="txt_codigo" id="txt_codigo" className="form-control" />
              {/* Articulo */}
              <label for="txt_articulo">Articulo</label>
              <input type="text" name="txt_articulo" id="txt_articulo" className="form-control" />
              {/* Descripcion */}
              <label for="txt_descrpcion">Descripcion</label>
              <input type="text" name="txt_descrpcion" id="txt_descrpcion" className="form-control" />
              {/* Precio */}
              <label for="txt_precio">Precio</label>
              <input type="text" name="txt_precio" id="txt_precio" className="form-control" />
              {/* Cantidad */}
              <label for="txt_cantidad">Cantidad</label>
              <input type="text" name="txt_cantidad" id="txt_cantidad" className="form-control" />
              {/* Total */}
              <label for="txt_total">Total</label>
              <input type="text" name="txt_total" id="txt_total" className="form-control" />
              {/* Total descuento */}
              <label for="txt_total_descuento">Total con descuento</label>
              <input type="text" name="txt_total_descuento" id="txt_total_descuento" className="form-control" />
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
