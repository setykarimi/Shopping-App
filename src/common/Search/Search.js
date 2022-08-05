import { useState } from "react";
import {useProductsAction } from "../../components/Providers/ProductsProvider";
import styles from './search.module.css'

const SearchBar = ({filter}) => {
console.log(filter);
    const {searchHandler , filterSizeHandler} = useProductsAction()

    const [value , setValue] = useState("")

    const changeHandler = (e) => {
        filterSizeHandler(filter)
        searchHandler(e.target.value)
        setValue(e.target.value)
    }

    return ( 
        <div className={styles.searchBar}>
            <span>Search for:</span>
            <input type="text" placeholder="Search for ..." onChange={changeHandler} value={value} />
        </div>
     );    
}
 
export default SearchBar;   