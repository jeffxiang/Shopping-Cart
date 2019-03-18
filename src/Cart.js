import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data.js"

class Cart extends React.Component {

  render() {
    let products = ProductData.products;
    let mapped_products = products.map(prod =>
      <Product
      productName={prod.name}
      price={prod.cost}
      limit={prod.stock} />
    );

    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            <div className="ui cards">
              {mapped_products}
            </div>
        </div>
    );
  }
}

export default Cart;
