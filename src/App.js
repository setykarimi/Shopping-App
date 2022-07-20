import React, { useState } from "react"
import './index.css'
import ProductList from "./components/ProductList/ProductList"
import Navbar from "./components/Navbar/Navbar"



class App extends React.Component  {
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


  render(){
  return (
    <div className="container">
     <Navbar totalItems ={this.state.products.filter((p) => p.quantity> 0).length}/>
      <ProductList
      products={this.state.products}
      onRemove={this.removeHandler}
      onIncrement={this.incrementhandler}
      onDecrement={this.decrementHandler}
      onChange={this.changeHandler} />
    </div>
  )
}
}

export default App