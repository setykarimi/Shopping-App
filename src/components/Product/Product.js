import styles from './Product.module.css'
import { BiTrashAlt } from "react-icons/bi";
import { useEffect } from 'react';

const Product = ({click,product,onDecrement,onIncrement,onChange,onDelete}) => {
  useEffect(()=> {
    // console.log('product js useEffect');
  },[product.quantity] )  
    return (
        <div className={styles.product} onClick={click}>
            <p>Product name: <b>{product.title}</b></p>
            <p>Product price: <b>{product.price}</b></p>
            <span className={styles.quantity__value}>{product.quantity}</span>
          {/* <input className={styles.input} type="text" onChange={onChange} value={product.name }/> */}
            <button className={`${styles.button} ${product.quantity == 1 && styles.remove}` } onClick={onDecrement}>
                {product.quantity > 1 ? "-" : <BiTrashAlt/>}
            </button>
            <button className={`${styles.button} ${styles.button__increment}`} onClick={onIncrement}>+</button>
            <button className={styles.button} onClick={onDelete}>delete</button>
        </div>
    );
}

export default Product;