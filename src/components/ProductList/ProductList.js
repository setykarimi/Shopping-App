import Product from "../Product/Product";
import React, { useState } from 'react';

class ProductList extends React.Component {
  state = {
    products: [
      { id: 1, name: "React.js", price: "99$", quantity: 2 },
      { id: 2, name: "Js Course", price: "89$", quantity: 4 },
      { id: 3, name: "Next Course", price: "70$", quantity: 3 }
    ]
  }

  removeHandler(id) {
    console.log('clicked', id)
    const filteredProducts = this.state.products.filter((product) => product.id !== id)
    this.setState({ products: filteredProducts })
  }

  incrementhandler(id) {
    const Products = [...this.state.products]
    const selectedProduct = Products.find(p => p.id === id)
    selectedProduct.quantity++;
    this.setState({ Products })
  }

  decrementHandler(id) {
    const Products = [...this.state.products]
    const selectedProduct = Products.find(p => p.id === id)
    if (selectedProduct.quantity == 1) {
      this.removeHandler(id)
    }
    else {
      selectedProduct.quantity--;
      this.setState({ Products })
    }
  }

  changeHandler(event, id) {
    const Products = [...this.state.products]
    const selectedProduct = Products.find(p => p.id === id)
    selectedProduct.name = event.target.value;
    this.setState({ Products })
  }


  renderProduct = () => {
    if(this.state.products.length === 0)
      return <div>there is no product in cart</div>
    
      return this.state.products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onDelete={() => this.removeHandler(product.id)}
            onIncrement={() => this.incrementhandler(product.id)}
            onDecrement={() => this.decrementHandler(product.id)}
            onChange={(e) => this.changeHandler(e, product.id)}
          />
        )
      })
  }
  

  render() {
    return (
      <>
      {!this.state.products.length && <div>go to shopping</div>}
        {this.renderProduct()}
      </>
    );
  }
}

export default ProductList;