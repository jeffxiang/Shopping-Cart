import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data.js";
import Receipt from "./Receipt.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

  handleAddToCart = (productName, price) => {
    var tempCartItems = [...this.state.cartItems];
    var in_cart = 0;
    for (var item of tempCartItems) {
      if (productName === item.productName) {
        item.count += 1;
        in_cart = 1;
      }
    }
    if (in_cart === 0) {
      tempCartItems.push(
        {
          productName: productName,
          price: price,
          count: 1
        }
      )
    }
    this.setState({cartItems: tempCartItems});
    console.log(this.state.cartItems)
  }

  render() {
    let products = ProductData.products;
    let mapped_products = products.map(prod =>
      <Product
      productName={prod.name}
      price={prod.cost}
      onAddToCart={this.handleAddToCart}
      //limit={prod.stock}
      />
    );

    return (
        <div className="page-content">
            <div className="ui cards">
              {mapped_products}
            </div>
            {<Receipt items={this.state.cartItems}/>}
        </div>
    );
  }
}

export default Cart;
