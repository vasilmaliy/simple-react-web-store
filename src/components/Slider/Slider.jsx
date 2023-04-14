import styles from './Slider.module.css';
import { useState } from 'react';
import { arrayOfProducImages, arrayOfThumbnailProducImages } from './img/index.js';
import imgClose from './img/icon-close.svg';

const Slider = ({ fullScreen, openFullScreenSlider, closeFullScreenSlider}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={fullScreen ? styles.active_slider : styles.slider }>
    <div className={styles.slider_item}>
      <img className={fullScreen ? styles.active_close_icon : styles.close_icon } src={imgClose} onClick={() => closeFullScreenSlider()}></img>
      <div div className={fullScreen ? styles.active_arrows : styles.arrows }>
        <div onClick={() => prevSlide()} className={styles.arrow}>
          ❰
          </div>
          <div onClick={() => nextSlider()} className={styles.arrow}>
          ❱
          </div>
        </div>
        <div className={styles.slide_image_container}>
          <img
            src={arrayOfProducImages[currentIndex]}
            onClick={() => openFullScreenSlider(true)}
            className={styles.slide_image}>
          </img>
        </div>
     </div>
    <div className={styles.thumbnails_container}>
      {arrayOfProducImages.map((slide, slideIndex) => (
        <div className={styles.thumbnail} key={slideIndex}>
          <img
            src={arrayOfProducImages[slideIndex]}
            onClick={() => goToSlide(slideIndex)}
            className={styles.slide_image}>
          </img>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Slider;