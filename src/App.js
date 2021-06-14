import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Welcome from './components/Welcome';
import TableProducts from './components/TableProducts';

import { getProducts } from './services/services';
function App() {
  const [data, setData] = useState({ items: [] });

  let handleOnChangeCheckbox = (event) => {
    console.log(event.target.value)
    let fruites = data.items
    fruites.forEach(fruite => {
      // console.log(`${fruite.sku} === ${event.target.value} => ${fruite.sku === event.target.value}`)
      fruite.isChecked = false;
      if (fruite.sku === event.target.value)
        fruite.isChecked = event.target.checked
    })
    setData({ items: fruites })
  }

  // let handleOnClickButtonDelete = (event) => {
  //   // console.log(event.target)
  //   let fruites = data?.items;
  //   let filtered = fruites
  //     .filter(item => item.isChecked !== true)
  //   console.log(filtered);

  //   setData({ items: filtered })

  // }

  useEffect(() => {

    const fetchData = async () => getProducts()
      .then(items => {
        setData({ isLoaded: true, items: items });
      }, (e) => setData(
        { isLoaded: true, error: e }
      ))

    fetchData();

  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Fruteria Store" />
      </header>
      <div className="container">
        <div className="row pb-5">
          <Button label="Cargar Productos" nameClass="btn btn-primary" action="load" />

          <Button label="Agregar productos" nameClass="btn btn-success" action="add" />

          <Button label="Modificar productos" nameClass="btn btn-secondary" action="edit" />

          <Button label="Eliminar productos" nameClass="btn btn-danger" action="delete"  />

        </div>
        {data?.items?.length > 0 ? <TableProducts data={data}
          handleOnChangeCheckbox={handleOnChangeCheckbox} /> : <div></div>}

      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;

