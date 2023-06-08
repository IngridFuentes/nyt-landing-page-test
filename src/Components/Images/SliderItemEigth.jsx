import React from 'react';
import styles from './SliderItem.module.css';
import LogoBlack from '../../Assets/LogoBlack.svg' ;

const SliderItemEigth = () => {
    return(
        <div className={styles.item8} >
          <div className={styles.lastLine}> More of life brought to life. </div>
          <img className={styles.videoSneakersImg} alt="" /> 
          <div className={styles.greySq}>
            <p className={styles.textOnGreysq}>
              Thank you for supporting independent journalism.
            </p>
          </div>
          <div className={styles.whiteSq}>
            <div className={styles.nytLogo}>
                <img src={LogoBlack} alt="" />
            </div>
            <div className={styles.year}>©2023</div>
            <div className={styles.nytSensitiveUserInfo}>
              We No Longer Sell Your Personal Information California Notices
              Limit the Use of My Sensitive Information
            </div>
            <div className={styles.nytCompanyLineFooter}>
              <p className={styles.aboutFooter}> About </p>
              The New York Times Company Privacy Policy Terms of Sale
            </div>
            <div className={styles.questionsFooter}>
              <p className={styles.helpLineFooter}> Help</p>
              Frequently Asked Questions Contact Us Feedback
            </div>
          </div>
        </div>
    )
};

export default SliderItemEigth;