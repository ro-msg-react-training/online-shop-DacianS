import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ProductInputs from "./ProductInputs";
import { ProductInput } from "../actions";

const PRODUCTS_URL = "http://localhost:4000/products/";

class AddProduct extends React.Component<RouteComponentProps>{

    onSave(newProduct: ProductInput) {
        fetch(PRODUCTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then((response) => {
                if (!response.ok) alert("error");
                else alert("New product created");
            })
            .catch((error) => { alert(error); });
    }


    render() {
        return (
            <div>
                <ProductInputs onSave={this.onSave} />
            </div>
        );
    }
}

export default withRouter(AddProduct);