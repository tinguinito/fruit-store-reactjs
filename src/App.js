import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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
      <footer>
        <Clock />
      </footer>
    </div>
  );
}

export default App;

function Welcome(props) {
  return <h1 className="text-primary text-center py-5">Bienvenido a, {props.name}</h1>
}

function Button(props) {
  return (
    <div className="col-3 text-center">
      <button className={props.nameClass}>{props.label}</button>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}