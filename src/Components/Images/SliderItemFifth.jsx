import React from 'react';
import styles from './SliderItem.module.css';

const SliderItemFifth = () => {
    return (
        <div className={styles.item5}>
          <img className={styles.skullImg} alt="" />
          <img className={styles.gumWrapperImg} alt="" /> 
          <div className={styles.skullImgLine}> Science </div>
          <div className={styles.chewingLine}>
            How Chewing Shaped Human Evolution
            <p className={styles.authorLine} > By Kate Golembiewski </p>
            <p className={styles.date} > Published Aug. 17, 2022 </p>
          </div>
          <div className={styles.gumWrapperLine} > Style </div>
          <div className={styles.quitChewingLine} >
            I Quit Chewing Gum
            <p className={styles.authorLine} > By Alexandra Jacobs </p>
            <p className={styles.date} > Jan. 20, 2020 </p>
          </div>
          <p className={styles.textCenterFourth} >
            which was shaped by Chewing.
          </p>
          <p>
            So you can understand Gum,
          </p>
        </div>
    )
};

export default SliderItemFifth;