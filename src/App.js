import React, { useState } from "react"
import './index.css'
import ProductList from "./components/ProductList/ProductList"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/hoc/Wrapper"



// class App extends React.Component {

//   state = {
//     products: [
//       { id: 1, name: "React.js", price: "99$", quantity: 2 },
//       { id: 2, name: "Js Course", price: "89$", quantity: 4 },
//       { id: 3, name: "Next Course", price: "70$", quantity: 3 }
//     ]
//   }

//   removeHandler = (id) => {
//     console.log('clicked', id)
//     const filteredProducts = this.state.products.filter((product) => product.id !== id)
//     this.setState({ products: filteredProducts })
//   }

//   incrementhandler = (id) => {
//     const index = this.state.products.findIndex(item => item.id == id)
//     const product = { ...this.state.products[index] }
//     product.quantity++;
//     const products = [...this.state.products];
//     products[index] = product;
//     this.setState({ products })
//   }

//   decrementHandler = (id) => {

//     const index = this.state.products.findIndex((item) => item.id === id);
//     const product = { ...this.state.products[index] }
//     if (product.quantity === 1) {
//       const filteredProducts = this.state.products.filter((p) => p.id !== id)
//       this.setState({ products: filteredProducts })
//     } else {
//       const products = [...this.state.products]
//       product.quantity--;
//       products[index] = product;
//       this.setState({ products })
//     }
//   }

//   changeHandler = (event, id) => {
//     const index = this.state.products.findIndex(item => item.id == id)
//     const product = { ...this.state.products[index] }
//     product.name = event.target.value;
//     const products = [...this.state.products];
//     products[index] = product;
//     this.setState({ products })
//   }

//   componentDidMount() {
//     console.log('app.js component didmount');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('app.js componentDidiUpdate');
//     console.log('app.js', prevState);
//   }

//   render() {
//     return (
//       <>
//         <Navbar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
//         <ProductList
//           products={this.state.products}
//           onRemove={this.removeHandler}
//           onIncrement={this.incrementhandler}
//           onDecrement={this.decrementHandler}
//           onChange={this.changeHandler} />
//       </>
//     )
//   }
// }

const App = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "React.js", price: "99$", quantity: 2 },
    { id: 2, name: "Js Course", price: "89$", quantity: 4 },
    { id: 3, name: "Next Course", price: "70$", quantity: 3 }
  ])


  const removeHandler = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id)
    setProducts(filteredProducts)
  }


  const incrementhandler = (id) => {
    // 1.id => ok
    // 2. index
    const index = products.findIndex(item => item.id == id)
    // 3. clone the selected index and update qty
    const product = { ...products[index] }
    product.quantity++;
    // 4. update products
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts( updatedProducts )
  }


  const decrementHandler = (id) => {

    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] }
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id)
      setProducts( filteredProducts )
    } else {
      const updatedProducts = [...products]
      product.quantity--;
      updatedProducts[index] = product;
      setProducts( updatedProducts )
    }
  }


  
    const changeHandler = (event, id) => {
    const index = products.findIndex(item => item.id == id)
    const product = { ...products[index] }
    product.name = event.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts( updatedProducts )
  }


  return (
    <>
       <Navbar totalItems={products.filter((p) => p.quantity > 0).length} />
        <ProductList
          products={products}
          onRemove={removeHandler}
          onIncrement={incrementhandler}
          onDecrement={decrementHandler}
          onChange={changeHandler} />
    </>
  );
}


export default Wrapper(App, 'container')