import React from 'react';

const ProductItem = {
    name: "Laptop",
    price: 2000,
    description: "Great laptop"
}

class Product extends React.Component{

    render(){
        return(
            <div className="Product">
                <h2>{ProductItem.name}</h2>
                <p>Price: {ProductItem.price}</p>
                <p>Description: {ProductItem.description}</p>
            </div>
        );
    }
}

export default Product;