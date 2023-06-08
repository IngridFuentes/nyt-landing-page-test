import React from 'react';
import styles from './SliderItem.module.css';

const SliderItemSixth = () => {
    return(
        <div className={styles.item6} >
          <img className={styles.streetGumImg} alt=""/>
          <div className={styles.streetGumLine}> New York </div>
          <div className={styles.streetNyLine}>
            Out, Damned Spot
            <p className={styles.authorLine}> By Deborah Stead </p>
            <p className={styles.date}> Jan. 26, 2003 </p>
          </div>
          <p className={styles.textCenterFifth}>
            and when you realize how much of it is on the Street,
          </p>
        </div>
    )
};

export default SliderItemSixth;