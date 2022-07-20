import styles from './navBar.module.css'

const Navbar = ({totalItems}) => {
    return ( <header className={styles.navBar}>
       <h2>Shopping App</h2>
       <span>{totalItems}</span>
    </header> );
}
 
export default Navbar;