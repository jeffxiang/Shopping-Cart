import React from "react";

function Product(props) {

  return (
      <div class="card">
        <div class="content">
          <div class="header">{props.productName}</div>
            <div class="description">
              Price: ${props.price}
            </div>
          </div>
          <div class="ui bottom attached button" onClick={
            () => {props.onAddToCart(props.productName, props.price, props.limit)}
          }>
            <i class="add icon" ></i>
              Add to Cart
          </div>
          <div class="ui bottom attached button" onClick={
            () => {props.onRemoveFromCart(props.productName)}
          }>
            <i class="remove icon"></i>
              Remove from Cart
          </div>
      </div>
  );
}

export default Product;
