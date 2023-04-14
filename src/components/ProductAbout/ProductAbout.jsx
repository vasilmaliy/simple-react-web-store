import styles from './ProductAbout.module.css';
import imgCart from './img/icon-cart.svg';
import {useState} from 'react';

const ProductAbout = () => {
  
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if ( quantity === 0 ) {
      return;
    }
    setQuantity(quantity - 1);
  }

  return (
    <div className={styles.main_product_info}>
    <p className={styles.company_name}>sneaker company</p>
    <h1 className={styles.product_name}>Fall Limited Edition Sneakers</h1>
    <p className={styles.product_description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
    
    <div className={styles.product_price_container}>
        <div className={styles.product_price}>
          <p className={styles.product_price__big}>$125.00</p>
          <div className={styles.product_price__discount}>
            50%
          </div>
        </div>
        <p className={styles.product_price__small}>$250</p>
        <div className={styles.product_action}>
          <div className={styles.product_quantity}>
            <button className={styles.next_btn} onClick={() => decreaseQuantity()}>-</button>
            <span>{quantity}</span>
            <button className={styles.next_btn} onClick={() => increaseQuantity()}>+</button>
          </div>
          <button className={styles.add_to_cart_button}>
            <img className={styles.cart_icon} src={imgCart}></img>
            <p>Add to cart</p>
          </button>
        </div>
    </div>
  </div>
  )
}

export default ProductAbout;