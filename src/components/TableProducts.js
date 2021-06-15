import React from 'react'
import { deleteProduct } from '../services/services';
import Button from './Button';
import EditProducts from './EditProducts'

class TableProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: props.data.error,
            isLoaded: props.data.isLoaded,
            items: props.data.items,
            hiddenEdit: { display: 'none' },
            IsHiddenEdit: false,
            product: {},
        };
        // this.handleOnClickButtonDelete = this.handleOnClickButtonDelete.bind(this)

    }

    callback = () => {
        // do something with value in parent component, like save to state
        this.setState({ IsHiddenEdit: false })
    }

    handleOnClickButtonDelete(sku, e) {
        e.preventDefault();
        let fruites = this.state.items;
        let filtered = fruites.filter(item => item.sku !== sku)
        console.log(filtered);
        this.setState({ items: filtered })

        deleteProduct(sku).then(console.log); 
    }

    handleOnClickButtonEdit(sku, e) {
        e.preventDefault();
        console.log(sku)
        let fruites = this.state.items;
        let filtered = fruites.filter(item => item.sku === sku)
        this.setState({ hiddenEdit: { display: 'flex' }, product: filtered[0], IsHiddenEdit: true })

    }



    render() {
        const { error, isLoaded, items, hiddenEdit } = this.state;
        // console.log(items)
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="row">
                    <table id="table-products" className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">sku</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Unidad</th>
                                <th scope="col" style={{ width: '160px' }} >Accion</th>
                            </tr>
                        </thead>
                        <tbody>

                            {items.map(item =>
                            (<tr key={item.sku}>
                                <th>
                                    <CheckBox handleCheckChieldElement={this.props.handleOnChangeCheckbox} {...item} />
                                </th>
                                <th scope="row" > {item.sku}  </th>
                                <th> {item.product}  </th>
                                <th> {item.quantity}  </th>
                                <th> $ {item.price}  </th>
                                <th> {item.un} </th>
                                <th className="row">
                                    <Button label="Borrar" nameClass="btn btn-danger" onClick={(e) => this.handleOnClickButtonDelete(item.sku, e)} col="col-6" />
                                    <Button label="Editar" nameClass="btn btn-warning" onClick={(e) => this.handleOnClickButtonEdit(item.sku, e)} col="col-6" />
                                </th>

                            </tr>
                            ))}

                        </tbody>
                    </table>
                    {this.state.IsHiddenEdit ? <EditProducts display={hiddenEdit} product={this.state.product} parentCallback={this.callback} /> : ''}
                </div >
            )
        }
        ;
    };

}
export default TableProducts;

export const CheckBox = props => {
    return (<input className="form-check-input col-1"
        key={props.sku}
        onChange={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.sku} />)
}