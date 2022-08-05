import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProvider";
import Select from 'react-select';
import styles from './filter.module.css'
import SelectComponent from "../../common/Filter/Select";
import SearchBar from "../../common/Search/Search";

const Filter = ({}) => {
    const { filterSizeHandler, sortChangehandler } = useProductsAction();
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const filterHandler = (selectedOption) => {
        filterSizeHandler(selectedOption)
        // sortChangehandler(sort)
        setFilter(selectedOption)
    }

    const sortHandler = (selectedOption) => {
        sortChangehandler(selectedOption)
        setSort(selectedOption)
    }

    const options = [
        { value: 'All', label: 'All' },
        { value: 'X', label: 'X' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'S', label: 'S' }
    ]

    const sortOptions = [
        { value: 'highest', label: 'highest' },
        { value: 'lowest', label: 'lowest' }
    ]



    return (
        <>
            <SearchBar
            filter={filter} />
            <div className={styles.filterContainer}>
                <p>filter products based on: </p>

                <SelectComponent
                    title="Order by:"
                    value={filter}
                    changeHandler={filterHandler}
                    options={options}
                />

                <SelectComponent
                    title="Sort by:"
                    value={sort}
                    changeHandler={sortHandler}
                    options={sortOptions}
                />
            </div>
        </>);
}

export default Filter;