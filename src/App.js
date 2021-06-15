import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import Welcome from './components/Welcome';
import TableProducts from './components/TableProducts';

import { addProduct, getProducts } from './services/services';
function App() {
  const [data, setData] = useState({ items: [] });

  let callbackApp = (items) => {
    console.log('items APP', items)
    console.log(`data.items ${JSON.stringify(data.items)}`)
    setData({ items: items })
  }

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

  let addNewProduct = async () => {
    console.log('addNewProduct')

    let newProduct = { sku: "prod-6", product: "Zanahoria", quantity: 50, price: 900, un: 'KG', isChecked: false };

    return await addProduct(newProduct)
      .then((pro) => {
        console.log(`Add Product ${pro}`)
        console.log(`data.items ${JSON.stringify(data.items)}`)
        let fruites = data.items
        fruites.push(newProduct);

        setData({ items: fruites })
        console.log(`data.items ${JSON.stringify(data.items)}`)
      });
  }

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

          <Button label="Agregar productos" nameClass="btn btn-success" action="add" onClick={addNewProduct} />
          {/* 
          <Button label="Modificar productos" nameClass="btn btn-secondary" action="edit" />

          <Button label="Eliminar productos" nameClass="btn btn-danger" action="delete"  /> */}

        </div>
        {data?.items?.length > 0 ? <TableProducts data={data}
          handleOnChangeCheckbox={handleOnChangeCheckbox} parentCallback={callbackApp} /> : <div></div>}

      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;

