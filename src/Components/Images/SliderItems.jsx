import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItemFirst from './SliderItemFirst';
import SliderItemSecond from './SliderItemSecond';
import SliderItemThird from './SliderItemThird';
import SliderItemFourth from './SliderItemFourth';
import SliderItemFifth from './SliderItemFifth';
import SliderItemSixth from './SliderItemSixth';
import SliderItemSeventh from './SliderItemSeventh';
import SliderItemEigth from './SliderItemEigth'


const SliderItems = () => {
        const settings = {
          dots: false,
          infinite: false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1
        }
        const slider = useRef(null);
        const scroll = (e) => {
          if (slider === null) return 0;
          console.log(slider, "slider");
          e.wheelDelta < 0 ? slider.current.slickNext() : slider.current.slickPrev();
        };
      
        useEffect(() => {
          window.addEventListener("wheel", scroll, true);
      
          return () => {
            window.removeEventListener("wheel", scroll, true);
          };
        }, []);
      

    return(
        <>
            <Slider {...settings} ref={slider}>
                <SliderItemFirst />
                <SliderItemSecond />
                <SliderItemThird />
                <SliderItemFourth />
                <SliderItemFifth />
                <SliderItemSixth />
                <SliderItemSeventh />
                <SliderItemEigth />
            </Slider>
        </>
    )
}

export default SliderItems;