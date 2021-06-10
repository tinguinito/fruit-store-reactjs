import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome.js'
import Button from './components/Button';
import TableProducts from './components/TableProducts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Fruteria Store" />
      </header>
      <div className="container">
        <div className="row pb-5">

          <Button label="Cargar Productos" nameClass="btn btn-primary" />

          <Button label="Agregar productos" nameClass="btn btn-success" />


          <Button label="Modificar productos" nameClass="btn btn-secondary" />


          <Button label="Eliminar productos" nameClass="btn btn-danger" />

        </div>
      </div>
      <TableProducts />
    </div>
  );
}

export default App;





