import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const PRODUCTS_URL = "http://localhost:4000/products/";
//const cartItems = [];

interface ID {
    id: string
}

interface ProductDetailProps extends RouteComponentProps<ID> { }

interface ProductsListState {
    item: any;
}


class ProductsDetail extends React.Component<ProductDetailProps, ProductsListState> {

    constructor(props: ProductDetailProps) {
        super(props);
        this.state = {
            item: []
        };
    }

    componentDidMount() {
        fetch(PRODUCTS_URL + this.props.match.params.id)
            .then((response) => {
                if (response.ok) { return response.json() }
            })
            .then((data) => {
                this.setState({ item: data });
            })
    }

    onDelete() {
        fetch(PRODUCTS_URL + this.props.match.params.id, {
            method: 'DELETE'
        })
            .then((response) => {
                if (response.ok) { this.props.history.push('/') }
            })
    }

    /*addItem(state: ProductsListState){ 
        cartItems.push(state);      
    }*/

    render() {
        if (this.state.item) {
            return (
                <div className="Product">
                    <div>
                        <img src={this.state.item.image} alt="" />
                        <p>{this.state.item.name}</p>
                    </div>
                    <p>Description: {this.state.item.description}</p>
                    <button className="button is-rounded has-text-weight-bold">Add to cart</button>
                    <button className="button is-rounded has-text-weight-bold" onClick={() => this.onDelete()} >Delete</button>
                </div>
            );
        }
    }

}

export default ProductsDetail;