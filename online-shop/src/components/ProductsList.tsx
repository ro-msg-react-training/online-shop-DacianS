import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const PRODUCTS_URL = "http://localhost:4000/products";

interface ProductsListProps { };

interface ProductsListState {
    items: any[];
}

class ProductsList extends React.Component<ProductsListProps, ProductsListState> {

    constructor(props: ProductsListProps) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(items => this.setState({ items }))
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    {this.state.items.map((product) =>
                        <div key={product.id.toString()}>
                            <div className="Product">
                                <p>{product.name}</p>
                                <p>{product.category}</p>
                                <p className="has-text-success">Price: {product.price}</p>
                                <Link className="button is-rounded" to={`/products/${product.id}`}>Details</Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default ProductsList;