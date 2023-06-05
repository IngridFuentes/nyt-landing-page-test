import React from 'react';
import LogoBlack from '../../Assets/LogoBlack.svg' ;
import styles from './slides.module.css';
import { text } from './Data';

const SliderItemFirst = () => {
    return(
        <div className="slider-item" style={{ width: 1400 }}>
            <img src={LogoBlack} alt="" />
          <h1 pageText={text.firstPageText} className={styles.firstPageText} >
            
            <p className="last-line-first-page">
              More of life brought to life.{" "}
            </p>
          </h1>
        </div>
    )
}

export default SliderItemFirst;