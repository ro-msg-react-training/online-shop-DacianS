import React from "react";

const ORDER_URL = "http://localhost:4000/orders";
const productsList = [
  {
    id: 0,
    name: "TV",
    price: 2500,
    description: "Great TV",
  },
  {
    id: 1,
    name: "Smartphone",
    price: 4000,
    description: "Great Smartphone",
  },
  {
    id: 2,
    name: "Printer",
    price: 1000,
    description: "Great printer",
  },
];

class ShoppingCart extends React.Component {
  onCheckout() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productsList),
    };
    fetch(ORDER_URL, requestOptions).then((response) => {
      if (response.ok) alert("checkout");
      else alert("error");
    });
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            {productsList.map((product) => (
              <div key={product.id.toString()}>
                <div className="Product">
                  <p>{product.name}</p>
                  <p className="has-text-success">Price: {product.price}</p>
                  <p>Description: {product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div>
          <button
            className="button is-large is-success is-light is-fullwidth"
            onClick={() => this.onCheckout()}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
