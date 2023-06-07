import React from 'react';
import styles from './SliderItem.module.css';

const SliderItemFifth = () => {
    return (
        <div className={styles.item5}>
          <img className="skullImg" alt="" />
          <img className="gumWrapperImg"alt="" /> 
          <div className="skullImgLine"> Science </div>
          <div className="chewingLine">
            How Chewing Shaped Human Evolution
            <p className="authorLine"> By Kate Golembiewski </p>
            <p className="date"> Published Aug. 17, 2022 </p>
          </div>
          <div className="gumWrapperLine"> Style </div>
          <div className="quitChewingLine">
            I Quit Chewing Gum
            <p className="authorLine"> By Alexandra Jacobs </p>
            <p className="date"> Jan. 20, 2020 </p>
          </div>
          <p className="textCenterFourth">
            which was shaped by Chewing.
          </p>
          <p>
            So you can understand Gum,
          </p>
        </div>
    )
};

export default SliderItemFifth;