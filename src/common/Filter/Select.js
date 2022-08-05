import styles from './select.module.css';
import Select from 'react-select';

const SelectComponent = ({value , changeHandler , options , title , ...rest}) => {
    return ( 
        <div className={styles.selectFilter}>
        <span>{title}</span>
        <Select
            className={styles.select}
            {...rest}
            value={value}
            onChange={changeHandler}
            options={options}
        />
    </div>
     );
}
 
export default SelectComponent;