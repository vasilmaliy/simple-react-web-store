import styles from './DropDown.module.css';
import { useState } from 'react';

const DropDown = ({children, heading, emptyFilling}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  }

  const closeDropDown = () => {
    setIsOpen(false);
  }

  return (
      <div className={styles.dropdown_button} onClick={ () => toggleDropDown()}>
        <div aria-hidden={!isOpen}  className={isOpen ? styles.dropdown_menu_active : styles.dropdown_menu}>
              <div className={styles.dropdown_header}>
                <h4 className={styles.dropdown_heading}>{heading}</h4>
              </div>
              {children ? children : <div className={styles.empty}>{emptyFilling}</div> }
        </div>
      </div>
  )
}

export default DropDown;