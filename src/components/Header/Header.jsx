import styles from './Header.module.css';
import imgLogo from './img/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={imgLogo} alt="sneakers"></img>

      <ul className={styles.container__list}>
        <li><NavLink  
              to="/collections" 
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? styles.active : ""
              }
        >
          Collections
        </NavLink></li>
        <li><NavLink  
              to="/men" 
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? styles.active : ""
              }
        >
          Men
        </NavLink></li>
        <li><NavLink  
              to="/women" 
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? styles.active : ""
              }
        >
          Women
        </NavLink></li>
        <li><NavLink  
              to="/about" 
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? styles.active : ""
              }
        >
          About
        </NavLink></li>
        <li><NavLink  
              to="/contact" 
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? styles.active : ""
              }
        >
          Contact
        </NavLink></li>
      </ul>
    </div>
  )
}

export default Header;