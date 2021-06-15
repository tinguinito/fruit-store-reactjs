import React from "react"
import { updateProduct } from '../services/services';
class EditProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.display,
            product: this.props.product
        };
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(`this.state: ${JSON.stringify(this.state)}`)
    };

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let productLocal = this.state.product;
        productLocal[name] = value;

        this.setState({ product: productLocal })

    }

    async handleSubmit(event) {
        event.preventDefault();
        return await updateProduct(this.state.product).then(console.log).then(() => {
            // this.setState({ parentCallback: false })
            this.props.parentCallback(false)
            console.log('A name was submitted: ' + JSON.stringify(this.state));
        })


    }

    render() {
        const { display, product } = this.state;
        return (
            <form id="form-product" className="row" target="_self" style={display} onSubmit={(e) => this.handleSubmit(e, this)}>
                <div className="col-2">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" name="sku" className="form-control" id="sku" aria-describedby="sku" value={product.sku} disabled />
                </div>
                <div className="col-4">
                    <label htmlFor="product" className="form-label">Producto</label>
                    <input type="text" name="product" className="form-control" id="product" aria-describedby="product" value={product.product} onChange={(e) => this.handleInputChange(e, this)} />
                </div>
                <div className="col-2">
                    <label htmlFor="quantity" className="form-label">Cantidad</label>
                    <input type="number" name="quantity" className="form-control" id="quantity" aria-describedby="quantity" value={product.quantity} onChange={(e) => this.handleInputChange(e, this)} />
                </div>
                <div className="col-2">
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input type="number" name="price" className="form-control" id="price" aria-describedby="price" value={product.price} onChange={(e) => this.handleInputChange(e, this)} />
                </div>
                <button type="submit" className="btn btn-primary pt-2 col-2" >Submit</button>

            </form>
        )
    }


}

export default EditProducts;

