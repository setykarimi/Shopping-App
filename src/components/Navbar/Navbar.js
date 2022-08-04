import { useProducts } from '../Providers/ProductsProvider';
import styles from './navBar.module.css'

const Navbar = () => {

    const products = useProducts()
    const totalItems=products.filter((p) => p.quantity > 0).length;
    return ( <header className={styles.navBar}>
       <h2>Shopping App</h2>
       <span>{totalItems}</span>
    </header> );
}
 
export default Navbar;