import Product from "../Product/Product";
import React, { useState } from 'react';

class ProductList extends React.Component {
  renderProduct = () => {
    const {onRemove , onIncrement , onChange , onDecrement , products} = this.props;
    if(this.props.products.length === 0)
      return <div>there is no product in cart</div>
    
      return products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onDelete={() =>onRemove(product.id)}
            onIncrement={() => onIncrement(product.id)}
            onDecrement={() =>onDecrement(product.id)}
            onChange={(e) => onChange(e, product.id)}
          />
        )
      })
  }
  

  render() {
    const {products} = this.props;
    return (
      <>
      {!products.length && <div>go to shopping</div>}
        {this.renderProduct()}
      </>
    );
  }
}

export default ProductList;