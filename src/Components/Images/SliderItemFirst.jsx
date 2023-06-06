import React from 'react';
import LogoBlack from '../../Assets/LogoBlack.svg' ;
import styles from './SliderItemFirst.module.css';
import { text } from './Data';

const SliderItemFirst = () => {
    return(
        <div className="slider-item" style={{ width: 1400 }}>
            <img src={LogoBlack} alt="" />
          <h1 className={styles.firstPageText}>
              {text.firstPageText}
            <p className={styles.lastLineFirstPage} > 
              {text.lastLineFirstPage}
            </p>
          </h1>
        </div>
    )
}

export default SliderItemFirst;