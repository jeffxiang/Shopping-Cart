import React from "react";

function Product(props) {
  var clicks = 0;

  function addToCart() {
    clicks += 1;
    if (props.limit === 0) {
      alert("This item is out of stock!");
    }
    else if (clicks > props.limit) {
      alert("There are too many " + props.productName + "s in your cart!");
    }
    else {
      alert("You have " + clicks + " " + props.productName + "s in your cart!");
    }
  }

  return (
      <div class="card">
        <div class="content">
          <div class="header">{props.productName}</div>
            <div class="description">
              Price: ${props.price}
            </div>
          </div>
          <div class="ui bottom attached button" onClick={addToCart}>
            <i class="add icon" ></i>
              Add to Cart
          </div>
      </div>
  );
}

export default Product;
