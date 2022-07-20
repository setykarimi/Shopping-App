import Product from "../Product/Product";
import React, { useState } from 'react';

class ProductList extends React.Component {
  renderProduct = () => {
    if(this.props.products.length === 0)
      return <div>there is no product in cart</div>
    
      return this.props.products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onDelete={() => this.props.onRemove(product.id)}
            onIncrement={() => this.props.onIncrement(product.id)}
            onDecrement={() => this.props.onDecrement(product.id)}
            onChange={(e) => this.props.onChnage(e, product.id)}
          />
        )
      })
  }
  

  render() {
    return (
      <>
      {!this.props.products.length && <div>go to shopping</div>}
        {this.renderProduct()}
      </>
    );
  }
}

export default ProductList;