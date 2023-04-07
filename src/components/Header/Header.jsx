
import styles from './Header.module.css';
import imgLogo from './img/logo.svg';
import imgMenu from './img/icon-menu.svg';
import imgClose from './img/icon-close.svg';
import imgCart from './img/icon-cart.svg';
import imgAvatar from './img/image-avatar.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  }

  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
      <div className={styles.menu_button_container} onClick={() => toggleMenu()}> 
          <img  className={styles.mobile_menu_button} src={menuToggle ? imgClose : imgMenu}></img> 
      </div>

      <img className={styles.logo} src={imgLogo} alt="sneakers"></img>
      
      <div className={styles.navbar} id={menuToggle ? styles.open : styles.close}>
        <ul className={styles.menu_items_list}>
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
      <label className={styles.overlay}></label>
      

      <div className={styles.right_menu_items}>
            <div className={styles.cart_icon_container}>
              <img className={styles.cart_icon} src={imgCart} alt="card"></img>
            </div>
            <div className={styles.user_icon_container}>
              <img className={styles.user_icon} src={imgAvatar} alt="card"></img>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Header;