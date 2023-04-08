import styles from './HomePage.module.css';
import Header from '@components/Header';
import { useState } from 'react';
import { arrayOfProducImages, arrayOfThumbnailProducImages } from './img/index.js';
import imgClose from './img/icon-close.svg';
import imgCart from './img/icon-cart.svg';

const HomePage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const prevSlide = () => {
    const isFirsSlide = currentIndex == 0;
    const nextIndex = isFirsSlide ? arrayOfProducImages.length - 1 : currentIndex - 1 ;
    setCurrentIndex(nextIndex);
  }

  const nextSlider = () => {
    const isLsatSlider = currentIndex === arrayOfProducImages.length - 1;;
    const nextIndex = isLsatSlider ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.product_about}>
        <div className={styles.product_about_left}>
          <div className={isActive ? styles.active_slider : styles.slider }>
            <div className={styles.slider_item}>
              <img className={isActive ? styles.active_close_icon : styles.close_icon } src={imgClose} onClick={() => setIsActive(false)}></img>
              <div div className={isActive ? styles.active_arrows : styles.arrows }>
                <div onClick={() => prevSlide()} className={styles.arrow}>
                  ❰
                  </div>
                  <div onClick={() => nextSlider()} className={styles.arrow}>
                  ❱
                  </div>
                </div>
                <img
                  src={arrayOfProducImages[currentIndex]}
                  onClick={() => setIsActive(true)}
                  className={styles.thumbnail_picture}>
                </img>
             </div>
            <div className={styles.thumbnails_container}>
              {arrayOfProducImages.map((slide, slideIndex) => (
                <div className={styles.thumbnail}>
                  <img key={slideIndex}
                    src={arrayOfProducImages[slideIndex]}
                    onClick={() => goToSlide(slideIndex)}
                    className={styles.thumbnail_picture}>
                  </img>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.product_about_right}>
            <div className={styles.main_product_info}>
              <p className={styles.company_name}>sneaker company</p>
              <h1 className={styles.product_name}>Fall Limited Edition Sneakers</h1>
              <p1 className={styles.product_description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p1>
              
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
                      <button className={styles.next_btn}>-</button>
                      <span>0</span>
                      <button className={styles.next_btn}>+</button>
                    </div>
                    <button className={styles.add_to_cart_button}>
                      <img className={styles.cart_icon} src={imgCart}></img>
                      <p>Add to cart</p>
                    </button>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <label className={isActive ? styles.overlay : '' }></label>
    </div>
  )
}

export default HomePage;