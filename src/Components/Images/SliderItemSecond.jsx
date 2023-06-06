import React from 'react';
import LogoBlack from '../../Assets/LogoBlack.svg' ;
import styles from './SliderItem.module.css';

const SliderItemSecond = () => {
    return(
        <div className={styles.item2} style={{ width: 1400 }}>
          <img className={styles.jordanSneakers} alt=""/>
          <img className={styles.midnightballImg} alt=""/> 
          <p className="textCenter">
            If you understand <p> Sneakers,</p> 
          </p>
          <p className="next-first-text-center">
            you start to understand Squeaking, 
          </p>

          <div className="styles-line">Styles</div>
          <div className="fight-sneakers-line">
            The Fight for Sneakers
            <p className="author-line"> By Daisuke Wakabayashi </p>
            <p className="date">Oct. 15, 2021</p>
          </div>
          <div className="sports-line">Sports</div>
          <div className="why-basketball-line">
            Why Are Basketball Games So Squeaky? Consider the Spiny Lobster
            <p className="author-line">
              By John Branch
              <p className="date"> March 17, 2017 </p>
            </p>
          </div>
          <img className={styles.image596} alt="" /> 
        </div>
    )

}
export default SliderItemSecond;
