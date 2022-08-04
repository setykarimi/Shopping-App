import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProvider";
import Select from 'react-select';
import styles from './filter.module.css'

const Filter = () => {
    const { filterSizeHandler , sortChangehandler} = useProductsAction();
    const [value, setValue] = useState("")
    const [sort, setSort] = useState("")

    const ChangeHandler = (selectedOption) => {
        filterSizeHandler(selectedOption)
        // sortChangehandler(sort)
        setValue(selectedOption)
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
        <div className={styles.filterContainer}>
            <p>filter products based on: </p>
            <div className={styles.selectFilter}>
                <span>  order by:</span>
                <Select
                    className={styles.select}
                    value={value}
                    onChange={ChangeHandler}
                    options={options}
                />
            </div>

            <div className={styles.selectFilter}>
                <span>  sort by:</span>
                <Select
                    className={styles.select}
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}
                />
            </div>
        </div>);
}

export default Filter;