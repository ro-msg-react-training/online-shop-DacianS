import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const productsDetails = [
    {
        id: 0,
        description: "Product id: 0"
    },
    {
        id: 1,
        description: "Product id: 1"
    },
    {
        id: 2,
        description: "Product id: 2"
    }
];

interface ID {
    id: string
}

interface ProductDetailId extends RouteComponentProps<ID> { }



class ProductsDetail extends React.Component<ProductDetailId> {

    item = productsDetails.find(item => item.id === parseInt(this.props.match.params.id));
    render() {
        if (this.item) {
            return (
                <div className="Product">
                    <p>Description: {this.item.description}</p>
                    <button className="button is-rounded has-text-weight-bold">Add to cart</button>
                </div>
            );
        }
    }

}

export default ProductsDetail;