import styles from './Product.module.css'
import { BiTrashAlt } from "react-icons/bi";

const Product = (props) => {
    return (
        <div className={styles.product} onClick={props.click}>
            <p>Product name: <b>{props.product.name}</b></p>
            <p>Product price: <b>{props.product.price}</b></p>
            <span className={styles.quantity__value}>{props.product.quantity}</span>
            <input className={styles.input} type="text" onChange={props.onChange} value={props.product.name }/>
            <button className={styles.button} onClick={props.onDecrement}>
                {props.product.quantity > 1 ? "-" : <BiTrashAlt/>}
            </button>
            <button className={`${styles.button} ${styles.button__increment}`} onClick={props.onIncrement}>+</button>
            <button className={styles.button} onClick={props.onDelete}>delete</button>
        </div>
    );
}

export default Product;