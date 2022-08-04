import React, { Children, useContext, useState } from "react";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "React.js", price: "99$", quantity: 2 },
        { id: 2, name: "Js Course", price: "89$", quantity: 4 },
        { id: 3, name: "Next Course", price: "70$", quantity: 3 }
    ])


    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={setProducts}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    )
}

export default ProductsProvider

export const useProducts = () => useContext(ProductContext);
export const useProductsAction = () => {

    const setProducts = useContext(ProductContextDispatcher);
    const products = useContext(ProductContext)

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
        setProducts(updatedProducts)
    }

    const decrementHandler = (id) => {
        const index = products.findIndex((item) => item.id === id);
        const product = { ...products[index] }
        if (product.quantity === 1) {
            const filteredProducts = products.filter((p) => p.id !== id)
            setProducts(filteredProducts)
        } else {
            const updatedProducts = [...products]
            product.quantity--;
            updatedProducts[index] = product;
            setProducts(updatedProducts)
        }
    }

    const changeHandler = (event, id) => {
        const index = products.findIndex(item => item.id == id)
        const product = { ...products[index] }
        product.name = event.target.value;
        const updatedProducts = [...products];
        updatedProducts[index] = product;
        setProducts(updatedProducts)
    }

    return {removeHandler , incrementhandler , decrementHandler , changeHandler}
}







