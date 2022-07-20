import React, { useState } from "react"
import './index.css'
import ProductList from "./components/ProductList/ProductList"

// class App extends React.Component {
//    state = {
//     products: [
//       {title: "React.js" , price: "99$"},
//       {title: "Js Course" , price: "89$"},
//       {title: "Next Course" , price: "70$"}
//     ]
//    }


//    clickHandler = () => {
//     // setState() => to update states
//     this.setState({
//       products: [
//         {title: "React.js" , price: "70$"},
//         {title: "Js Course" , price: "69$"},
//         {title: "Next Course" , price: "50$"}
//       ]
//     })
//    }

//   render() {
//     return (
//       <div className="container" id="title">
//         <h1>Shopping App</h1>
//         {this.state.products.map((product) => {
//           return(
//             <Product  name={product.name} 
//               price={product.price}
//             />
//           )
//         })}
//         <button onClick={this.clickHandler}>change price</button>
//       </div>
//     )
//   }
// }

const App = () => {
  
  return (
    <div className="container">
      <h1>Shopping App</h1>
      <ProductList />
    </div>
  )
}

export default App