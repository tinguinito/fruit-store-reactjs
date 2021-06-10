import React from 'react'

class TableProducts extends React.Component {
    render() {
        return (
            <div class="row">
                <table id="table-products" class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">sku</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Unidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default TableProducts;