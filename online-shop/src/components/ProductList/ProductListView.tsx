import React from "react";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

export interface ProductsListState {
    products: Product[];
    loading: boolean;
    error: string;
}

export const ProductListView = (props: ProductsListState) => {
    let products = [...props.products].map((product) =>
        <div key={product.id.toString()}>
            <div className="Product">
                <p>{product.name}</p>
                <p>{product.category}</p>
                <p className="has-text-success">Price: {product.price}</p>
                <Link className="button is-rounded" to={`/products/${product.id}`} >Details</Link>
            </div>
        </div>
    );
    return (
        <React.Fragment>
            <div>
                <Link className="button is-large has-text-weight-bold" to={`/add`}>Add new product</Link>
                <section className="section">
                    <div className="container">{products}</div>
                </section>
            </div>
        </React.Fragment>
    );
}