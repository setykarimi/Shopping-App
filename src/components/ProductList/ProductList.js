import Product from "../Product/Product";
import React, { useContext, useState } from 'react';
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";


const ProductList = (props) => {

  const products = useProducts();
  const {removeHandler , incrementhandler , decrementHandler , changeHandler} = useProductsAction();

  const renderProduct = () => {
    if (products.length === 0)
      return <div>there is no product in cart</div>

    return products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onDelete={() => removeHandler(product.id)}
          onIncrement={() => incrementhandler(product.id)}
          onDecrement={() => decrementHandler(product.id)}
          onChange={(e) => changeHandler(e, product.id)}
        />
      )
    })
  }


  return (<>
    {!products.length && <div>go to shopping</div>}
    {renderProduct()}
  </>);
}


export default ProductList;