import styles from './HomePage.module.css';
import Header from '@components/Header';
import { useState } from 'react';
import { arrayOfProducImages, arrayOfThumbnailProducImages } from './img/index.js';

const HomePage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const prevSlide = () => {
    const isFirsSlide = currentIndex == 0;
    const nextIndex = isFirsSlide ? arrayOfProducImages.length - 1 : currentIndex - 1 ;
    setCurrentIndex(nextIndex);
  }

  const nextSlider = () => {
    const isLsatSlider = currentIndex == 0;
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
               <img
                src={arrayOfProducImages[currentIndex]}
                onClick={() => setIsActive(!isActive)}
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
            <h2>fall limited edition</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage;