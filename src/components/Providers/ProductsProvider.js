import React, { Children, useContext, useState } from "react";
import { productsData } from '../db/db'
import _ from 'lodash'

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(productsData)


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

    const filterSizeHandler = (e) => {
        // console.log(e.target.value);
        if (e.value === "All") {
            setProducts(productsData)
        } else {
            const updatedProducts = productsData.filter(p => p.availableSizes.indexOf(e.value) >= 0)

            setProducts(updatedProducts)
        }
    }

    const sortChangehandler = (e) => {
        const value = e.value;
        const products = [...productsData];
        if (e.value === "highest") {
            const sortedProducts = products.sort((a, b) => {
                if (a.price < b.price) {
                    return 1
                }
                if (b.price < a.price) {
                    return -1
                }
                return 0
            })
        } else {
            const sortedProducts = products.sort((a, b) => {
                if (a.price > b.price) {
                    return 1
                }
                if (b.price < a.price) {
                    return -1
                }
                return 0
            })
        }


        // if (e.value === "lowest") {
        //     return  _.orderBy(productsItems, ['price'],['asc']);
        //  } else {
        //      return _.orderBy(productsItems, ['price'],['desc']);
        //  }

        setProducts(products)
    }

    const searchHandler = (searchText) => {
        if (searchText === "") {
            setProducts(productsData)
        } else {
            const filteredProducts = productsData.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
            setProducts(filteredProducts)
        }
    }


    return { removeHandler, incrementhandler, decrementHandler, changeHandler, filterSizeHandler, sortChangehandler, searchHandler }
}







