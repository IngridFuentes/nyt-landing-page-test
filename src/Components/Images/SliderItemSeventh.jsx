import React from 'react';
import styles from './SliderItem.module.css';

const SliderItemSeventh = () => {

    return(
        <div className={styles.item7}>
          <img className={styles.sneakersImg} alt="" /> 
          <div className={styles.technologyLine}> Technology </div>
          <div className={styles.wrappedSneakersLine}>
            Buy Low-Tops, Sell High-Tops: StockX Sneaker Exchange Is Worth $1
            Billion
            <p className={styles.authorLine}> By Erin Griffith</p>
            <p className={styles.date}>June 26, 2019 </p>
          </div>
          <p className={styles.textCenterSixth}>
            you understand why some people never wear their Sneakers.
          </p>
        </div>
    )
};

export default SliderItemSeventh;