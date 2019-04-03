import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.productName}>
	      <div className="receipt-text">
		      {item.productName} x {item.count}
	      </div>
        <div className="receipt-text">
		      ${item.price}
	      </div>
      </div>
    );
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">$0</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
