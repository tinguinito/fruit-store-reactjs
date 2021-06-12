import React from 'react'

class TableProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: props.data.error,
            isLoaded: props.data.isLoaded,
            items: props.data.items,
        };
        this.handleOnClickButtonDelete = this.handleOnClickButtonDelete.bind(this);

        // console.log(props.data.items)
    }

    handleOnClickButtonDelete() {
        let fruites = this.state.items;
        let filtered = fruites.filter(item => item.isChecked !== true)
        console.log(filtered);

        this.setState({ items: filtered })

    }

    handleCheckChieldElement = (event) => {
        console.log(event.target.value)
        this.props.parentCallback(event.target.value);
        event.preventDefault();
    }



    render() {
        const { error, isLoaded, items } = this.state;
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
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {items.map(item =>
                            (<tr key={item.sku}>
                                <th>
                                    <CheckBox handleCheckChieldElement={this.props.handleOnChangeCheckbox} {...item} />
                                </th>
                                <th scope="row" > {item.sku}  </th>
                                <th > {item.product}  </th>
                                <th > {item.quantity}  </th>
                                <th > $ {item.price}  </th>
                                <th > {item.un} </th>
                                {/* <th  > <a onClick={this.handleOnClickButtonDelete}> Delete</a> </th> */}
                            </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
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