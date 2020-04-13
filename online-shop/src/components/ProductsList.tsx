import React from 'react';

const productsList = [
    {
        id: 0,
        name: "TV",
        price: 2500,
        description: "Great TV"
    },
    {
        id: 1,
        name: "Smartphone",
        price: 4000,
        description: "Great Smartphone"
    },
    {
        id: 2,
        name: "Printer",
        price: 1000,
        description: "Great printer"
    }
]

class ProductsList extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    {productsList.map((product) =>
                        <div key={product.id.toString()}>
                            <div className="Product">
                                <p>{product.name}</p>
                                <p className="has-text-success">Price: {product.price}</p>
                                <p>Description: {product.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default ProductsList;