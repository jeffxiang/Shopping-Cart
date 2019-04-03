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

  handleAddToCart = (productName, price, stock) => {
    var tempCartItems = [...this.state.cartItems];
    var in_cart = 0;
    if (stock === 0) {
      alert("The selected item is out of stock!")
      return;
    }
    for (var item of tempCartItems) {
      if (productName === item.productName) {
        if (item.count === stock) {
          alert("You've selected too many " + productName + "s!");
          in_cart = 1;
        } else {
          item.count += 1;
          in_cart = 1;
        }
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
  }

  render() {
    let products = ProductData.products;
    let mapped_products = products.map(prod =>
      <Product
      productName={prod.name}
      price={prod.cost}
      onAddToCart={this.handleAddToCart}
      limit={prod.stock}
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
