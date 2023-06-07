import React from 'react';
import styles from './SliderItem.module.css';

const SliderItemThird = () => {

    return(
        <div className={styles.item3}>
          <img className={styles.basketballImg} alt="" />
          <img className={styles.fireImg} alt="" /> 
          <p className={styles.textCenterSecond}>
            Hardwood,
          </p>
          <p className={styles.kareemArtLine}>
            and the art of Kareem’s famous Sky Hook.
          </p>
          <p>
            So you get Flying,
          </p>

          <img className={styles.kareemImg} alt=""/> 
          <img className={styles.planeImg} alt="" /> 
          <div className={styles.sportsLineSecond}>Sports</div>
          <div className={styles.kareemLine}>

            Kareem Abdul-Jabbar Is Greater Than Any Basketball Record
            <p className={styles.authorLine}> By Kurt Streeter</p>
            <p className={styles.date}> Feb. 7, 2023 </p>
          </div>
          <div className={styles.athleticLine}>The Athletic </div>
          <div className={styles.kareemSecondLine}>
            Who really taught Kareem Abdul-Jabbar his hook shot? The answer
            might depend on whose story you believe
            <p className={styles.authorLine}> By Joe Vardon </p>
            <p className={styles.date}> March 2, 2023 </p>
          </div>
        </div>
    )
}
export default SliderItemThird;