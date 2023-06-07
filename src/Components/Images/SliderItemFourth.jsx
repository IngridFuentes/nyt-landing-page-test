import React from 'react';
import styles from './SliderItem.module.css';

const SliderItemFourth = () => {
    return(
        <div className="item4">
        <img className={styles.humanImg} alt=""/> 
        <img className={styles.humanRunningImg} alt="" /> 
        <div className={styles.textStayingAloft}> 
          STAYING ALOFT; What Does Keep Them Up There?
          <p className={styles.authorLine}> By Kenneth Chang </p>
          <p className={styles.date}> Dec. 9, 2003 </p>
        </div>
        <div className={styles.dailyLine}>The Daily</div>
        <div className={styles.dailyLineSecond}>
          A ‘Code Red for Humanity’
          <p className={styles.authorLine}> By The New York Times </p>
          <p className={styles.date}> Aug. 13, 2021 </p>
        </div>
        <div className={styles.wellnessLine}> Wellness </div>
        <div className={styles.wellnessLineSecond}>
          Running Is a Total Body Affair
          <p className={styles.authorLine}> By Gretchen Reynolds </p>
          <p className={styles.date}> Published Feb. 10, 2021 </p>
        </div>
        <p className={styles.textCenterThird}>
          our Changing World
        </p>
        <p>
          and Human Evolution,
        </p>

        <div className={styles.worldLine}> World </div>
        <div className={styles.changingWorldLine} >
          Ocean-Eaten Islands, Fire-Scarred Forests: Our Changing World in
          Pictures
          <p className={styles.authorLine} > By The New York Times </p>
          <p className={styles.date} > Nov. 8, 2022 </p>
        </div>
      </div>
    )
};

export default SliderItemFourth;