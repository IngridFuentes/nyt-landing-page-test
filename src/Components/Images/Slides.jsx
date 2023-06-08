import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion as m } from "framer-motion/dist/framer-motion";
import LogoBlack from '../../Assets/LogoBlack.svg' ;


const Slides = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

  return (
    <div className="container">
      {/* <Slider {...settings} ref={slider}> */}
        {/* <div className="slider-item" style={{ width: 1400 }}>
            <img src={LogoBlack}/>
          <h1 className="first-page-text">
            Following the threads of our interests and passions, wherever they
            take us, is exhilarating. That’s why Times journalism not only
            reports on the issues that matter but illuminates how they’re
            connected — so we can marvel at the complexity of our world as we
            come to understand it better.
            <br />
            <p className="last-line-first-page">
              More of life brought to life.{" "}
            </p>
          </h1>
        </div> */}
        {/* <div className="child2 overflow-hidden" style={{ width: 1400 }}>
          <m.div
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
            className="jordan-sneakers"
          ></m.div>
          <div className="midnightball-img"></div>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
            className="text-center"
          >
            If you understand <m.p> Sneakers,</m.p>{" "}
          </m.p>
          <p className="next-first-text-center">
            {" "}
            you start to understand Squeaking,{" "}
          </p>

          <div className="styles-line">Styles</div>
          <div className="fight-sneakers-line">
            The Fight for Sneakers
            <p className="author-line"> By Daisuke Wakabayashi </p>
            <p className="date">Oct. 15, 2021</p>
          </div>
          <div className="sports-line">Sports</div>
          <div className="why-basketball-line">
            {" "}
            Why Are Basketball Games So Squeaky? Consider the Spiny Lobster
            <p className="author-line">
              {" "}
              By John Branch
              <p className="date"> March 17, 2017 </p>
            </p>
          </div>

          <div className="image-596"></div>
        </div> */}
        {/* <div className="child3">
          <div className="basketball-img"></div>
          <div className="fire-img"></div>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
            className="text-center-second"
          >
            Hardwood,
          </m.p>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
            className="kareem-art-line"
          >
            and the art of Kareem’s famous Sky Hook.{" "}
          </m.p>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
          >
            {" "}
            So you get Flying,{" "}
          </m.p>

          <div className="kareem-img"></div>
          <div className="plane-img"></div>
          <div className="sports-line-second">Sports</div>
          <div className="kareem-line">
            {" "}
            Kareem Abdul-Jabbar Is Greater Than Any Basketball Record
            <p className="author-line"> By Kurt Streeter</p>
            <p className="date"> Feb. 7, 2023 </p>
          </div>
          <div className="athletic-line">The Athletic </div>
          <div className="kareem-second-line">
            {" "}
            Who really taught Kareem Abdul-Jabbar his hook shot? The answer
            might depend on whose story you believe
            <p className="author-line"> By Joe Vardon </p>
            <p className="date"> March 2, 2023 </p>
          </div>
        </div> */}
        {/* <div className="child4">
          <div className="human-img"></div>
          <div className="human-running-img"></div>
          <div className="text-staying-aloft">
            STAYING ALOFT; What Does Keep Them Up There?
            <p className="author-line">By Kenneth Chang </p>
            <p className="date"> Dec. 9, 2003 </p>
          </div>
          <div className="daily-line">The Daily</div>
          <div className="daily-line-second">
            A ‘Code Red for Humanity’
            <p className="author-line"> By The New York Times </p>
            <p className="date"> Aug. 13, 2021 </p>
          </div>
          <div className="wellness-line">Wellness</div>
          <div className="wellness-line-second">
            Running Is a Total Body Affair
            <p className="author-line"> By Gretchen Reynolds </p>
            <p className="date"> Published Feb. 10, 2021 </p>
          </div>
          <p className="text-center-third">
            our Changing World
          </p>
          <p>
            and Human Evolution,
          </p>

          <div className="world-line">World</div>
          <div className="changing-world-line">
            Ocean-Eaten Islands, Fire-Scarred Forests: Our Changing World in
            Pictures
            <p className="author-line"> By The New York Times </p>
            <p className="date"> Nov. 8, 2022 </p>
          </div>
        </div> */}
        {/* <div className="child5">
          <div className="skull-img"></div>
          <div className="gum-wrapper-img"></div>
          <div className="skull-img-line"> Science </div>
          <div className="chewing-line">
            How Chewing Shaped Human Evolution
            <p className="author-line"> By Kate Golembiewski </p>
            <p className="date"> Published Aug. 17, 2022 </p>
          </div>
          <div className="gum-wrapper-line"> Style </div>
          <div className="quit-chewing-line">
            I Quit Chewing Gum
            <p className="author-line"> By Alexandra Jacobs </p>
            <p className="date"> Jan. 20, 2020 </p>
          </div>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
            className="text-center-fourth"
          >
            which was shaped by Chewing.
          </m.p>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, transition: 0.5 }}
          >
            So you can understand Gum,
          </m.p>
        </div> */}
        {/* <div className="child6">
          <div className="street-gum-img"></div>
          <div className="street-gum-line"> New York </div>
          <div className="street-ny-line">
            Out, Damned Spot
            <p className="author-line"> By Deborah Stead </p>
            <p className="date"> Jan. 26, 2003 </p>
          </div>
          <p className="text-center-fifth">
            and when you realize how much of it is on the Street,
          </p>
        </div> */}
        {/* <div className="child7" style={{ width: 700 }}>
          <div className="sneakers-img"></div>
          <div className="technology-line"> Technology </div>
          <div className="wrapped-sneakers-line">
            Buy Low-Tops, Sell High-Tops: StockX Sneaker Exchange Is Worth $1
            Billion
            <p className="author-line"> By Erin Griffith</p>
            <p className="date">June 26, 2019 </p>
          </div>
          <p className="text-center-sixth">
            you understand why some people never wear their Sneakers.
          </p>
        </div> */}
        {/* <div className="child8" style={{ width: 700 }}>
          <div className="last-line"> More of life brought to life. </div>
          <div className="video-sneakers-img"></div>
          <div className="grey-sq">
            <p className="text-on-greysq">
              {" "}
              Thank you for supporting independent journalism.{" "}
            </p>
          </div>
          <div className="white-sq">
            <div className="nyt-logo">
              <svg
                width="268"
                height="36"
                viewBox="0 0 268 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M263.873 24.8262C263.145 23.199 261.446 22.0219 259.712 22.0219C259.295 22.0219 258.082 22.0219 256.972 22.7143C257.631 21.6065 259.573 19.5277 262.07 18.0405L263.873 19.4253V24.8262ZM266.44 13.2628C265.469 14.9938 263.214 16.6903 261.966 17.6597L260.371 16.4133V11.2548C260.995 12.6382 262.521 13.8167 264.185 13.8167C265.157 13.8167 265.677 13.6422 266.44 13.2628ZM268 17.625L265.191 15.5132C267.064 13.886 267.792 11.7034 267.792 10.2161C267.792 10.007 267.757 9.62757 267.723 9.27992H267.376C267.098 10.043 266.543 10.7008 265.399 10.7008C264.289 10.7008 263.492 10.0776 262.798 9.31454L256.244 12.8805V18.179L258.671 20.0831C256.209 22.2643 255.758 23.7876 255.758 24.8955C255.758 26.3496 256.417 27.3882 257.665 27.8729L257.839 27.5613C257.527 27.2843 257.249 27.1112 257.249 26.4534C257.249 25.9687 257.839 25.2763 258.949 25.2763C260.37 25.2763 261.237 26.2443 261.688 26.765C261.688 26.7289 268 22.9913 268 22.9913V17.625ZM247.4 18.981V11.8491L247.643 11.6745L250.834 16.696L247.4 18.981ZM254.683 21.3699L251.111 24.141L247.4 21.2314V19.5004L254.302 14.8957V14.6866L250.868 9.42417L243.343 13.4431V23.3087L248.371 26.9439L254.96 21.7507L254.683 21.3699ZM242.025 23.5857L240.985 24.2781L239.424 22.8586V12.9916L240.915 11.8837L240.673 11.5707L239.389 12.5415L236.06 9.45881L231.76 12.5069L228.465 9.45881L224.234 12.4708L221.633 9.45881L217.472 12.3684L217.68 12.7493L218.72 12.0554L220.142 13.6133V23.0317L218.998 24.1742L222.327 26.9771L225.552 24.0703L224.234 22.824V12.9916L225.483 12.1593L227.737 14.2365V23.0317L226.627 24.1742L229.991 26.9771L233.147 24.0703L231.829 22.824V12.9209L232.939 12.1939L235.332 14.2365V22.8918L234.361 23.8972L237.759 26.9771L242.233 23.9319L242.025 23.5857ZM217.749 23.7588L216.639 24.4858L215.217 23.0663V13.0248L216.605 11.9876L216.327 11.6414L215.252 12.4708L212.72 9.45881L208.559 12.3684L208.802 12.7493L209.842 12.0554L211.125 13.6494V23.0663L209.252 24.4858L209.461 24.7628L210.432 24.0703L213.622 26.9771L217.992 24.0703L217.749 23.7588ZM213.31 2.25762L213.102 2.22444L210.189 4.68254V4.88882L212.651 7.65995H212.894L215.807 5.23648L215.772 5.06337L213.31 2.25762ZM195.658 19.7081L193.89 20.5736C192.884 19.258 192.225 17.4923 192.225 15.0342C192.225 14.0288 192.329 12.7824 192.641 11.9169L195.693 10.5681L195.658 19.7081ZM208.316 3.60928C208.316 0.735726 205.611 -0.0966221 203.357 0.00868368V0.4602C204.71 0.491936 205.75 0.943453 205.75 1.84216C205.75 2.46678 205.299 3.26162 203.947 3.26162C202.872 3.26162 200.791 2.63989 199.126 2.08451C197.288 1.46277 195.554 0.874211 194.098 0.874211C191.254 0.874211 189.104 2.9861 189.104 5.58123C189.104 7.69456 190.699 8.45479 191.358 8.73175L191.566 8.38698C191.15 8.10857 190.734 7.79843 190.734 6.96752C190.734 6.34434 191.288 5.33889 192.745 5.33889C194.063 5.33889 195.797 5.92889 198.086 6.58525C200.062 7.13918 202.247 7.65994 203.426 7.79843V12.2977L201.207 14.1341V14.3072L203.426 16.2445V22.4431C202.282 23.1009 200.964 23.274 199.82 23.274C197.704 23.274 195.693 22.7201 194.098 20.9544L200.062 18.0794V8.1432L192.745 11.399C193.508 9.4588 195.034 8.17926 196.594 7.24305L196.49 6.89684C192.156 8.0754 188.202 12.0554 188.202 16.9716C188.202 22.8586 192.988 27.2194 198.433 27.2194C204.328 27.2194 208.073 22.6162 208.004 17.7347L207.657 17.6986C206.79 19.5696 205.542 21.3338 203.912 22.27V16.2445L206.27 14.3764L206.235 14.1687L203.912 12.2977V7.79843C206.062 7.79843 208.316 6.34434 208.316 3.60928ZM168.124 22.9278L166.182 24.3819L166.425 24.6589L167.361 24.0011L170.621 26.9771L174.99 24.0703L174.748 23.7587L173.638 24.4858L172.216 23.0663V0.597245H171.904L166.633 4.09397V4.40412C167.153 4.71571 168.124 4.8542 168.124 6.62131V22.9278ZM184.146 23.7588L179.187 27.0131L172.459 16.8677L177.21 9.49487L177.522 9.45881C178.077 10.0127 179.048 10.6013 179.95 10.6013C180.955 10.6013 181.649 10.0488 182.065 9.45881C182.065 9.45881 182.343 9.49487 182.343 9.45881C182.169 12.403 180.192 14.0649 178.701 14.0649C177.175 14.0649 176.447 13.371 175.649 12.8863L175.199 13.5441L182.481 24.3127L183.938 23.4125L184.146 23.7588ZM166.633 9.80645C166.633 9.84107 166.356 9.80645 166.356 9.80645C165.974 10.1512 165.489 10.3936 165.072 10.3936C164.518 10.3936 163.789 10.0488 163.442 9.59873H163.165L160.703 12.2977L158.171 9.59873L153.871 12.5761L154.079 12.9209L155.223 12.1592L156.715 13.7518V22.9278L154.773 24.3819L155.015 24.6589L155.952 24.0011L159.454 26.9771L163.997 23.965L163.789 23.6549L162.506 24.4165L160.807 22.8918V12.6786C161.535 13.4748 162.402 14.1687 163.408 14.1687C165.35 14.1687 166.425 12.0222 166.633 9.80645ZM144.993 21.9585V11.5707L148.669 14.2019V24.5897L144.993 21.9585ZM152.726 12.7824L148.01 9.42417L140.935 13.4748V22.9625L139.479 24.141L139.687 24.4497L140.831 23.5164L145.513 26.9439L152.726 22.547V12.7824ZM132.82 23.101C132.82 24.2781 132.023 25.4191 130.497 25.4191C130.254 25.4191 129.56 25.3859 129.318 25.3513V16.8345C129.664 16.5215 130.289 16.0368 131.086 16.0368C131.815 16.0368 132.404 16.4537 132.82 16.8345V23.101ZM132.82 16.3152C132.473 15.969 131.849 15.5882 131.086 15.5882C130.323 15.5882 129.63 16.0368 129.318 16.3152V12.5069C129.63 12.7824 130.323 13.2671 131.086 13.2671C131.849 13.2671 132.473 12.8531 132.82 12.5069V16.3152ZM132.82 11.9876C132.439 12.403 131.815 12.817 131.086 12.817C130.289 12.817 129.699 12.3323 129.318 11.9876V5.51342L130.809 4.50941L132.82 6.34433V11.9876ZM138.785 3.01926L137.329 4.33631L134.069 1.49594L129.318 5.02873V1.70366H128.832L128.936 25.2821C128.451 25.2128 127.237 24.9344 126.127 24.7627L126.023 5.06335C126.023 3.60926 124.983 1.60124 122.382 1.60124C119.711 1.60124 117.977 3.64244 117.977 5.68509H118.394C118.532 4.81956 118.983 4.05934 119.85 4.05934C120.752 4.05934 121.515 4.61183 121.515 6.55206V12.2285C118.844 12.3323 117.319 13.8225 117.319 15.656C117.319 16.7985 117.839 18.5641 119.711 18.6348L119.781 18.2886C119.157 18.0116 119.018 17.6294 119.018 17.2831C119.018 16.4537 119.815 16.1075 120.925 16.1075H121.445V25.109C119.33 25.836 118.359 27.3939 118.359 29.1596C118.359 31.5831 120.301 33.418 123.145 33.418C125.156 33.418 126.89 33.0718 128.73 32.6563C130.219 32.3448 132.023 31.9986 132.89 31.9986C133.999 31.9986 134.485 32.5179 134.485 33.3141C134.485 34.3167 134.034 34.699 133.445 34.8721L133.514 35.2183C135.907 34.7682 137.294 33.3473 137.294 31.2023C137.294 28.9865 135.179 27.6709 132.82 27.6709C131.607 27.6709 129.214 28.0503 127.41 28.4686C125.399 28.9173 123.353 29.125 122.729 29.125C121.723 29.125 120.476 28.6403 120.476 27.2901C120.476 26.0783 121.48 25.109 123.977 25.109C125.33 25.109 126.855 25.3167 128.52 25.6975C130.289 26.0783 131.849 26.563 133.375 26.563C135.491 26.563 137.398 25.8014 137.398 22.7201V4.78782L139.097 3.3323L138.785 3.01926ZM111.77 11.0168L110.695 11.8145L107.92 9.45881L104.695 12.3684L106.013 13.6133V24.5897L102.476 22.3393V13.4071L103.622 12.6108L100.221 9.45881L97.0656 12.3684L98.3849 13.6133V24.0357L97.9326 24.3127L94.8461 22.1316V13.371C94.8461 11.3644 93.8751 10.7744 92.5919 9.97956C91.5169 9.32176 91.0313 8.76783 91.0313 7.76382C91.0313 6.93291 91.8637 6.44677 92.2798 6.20587C92.2451 6.1698 92.2451 5.85821 92.2451 5.85821C91.1354 5.82359 88.0489 7.03677 87.9795 9.84108C87.9449 11.2952 88.6385 11.9169 89.3667 12.6108C90.095 13.3017 90.7539 13.9595 90.7539 15.1713V23.5856L89.1933 24.7974L89.4361 25.109L90.858 24.0011L94.7074 27.0131L98.3488 24.555L102.372 27.0131L110.105 22.5124V12.7493L112.013 11.3644L111.77 11.0168ZM80.6289 18.981V11.8491L80.8717 11.6745L84.0622 16.696L80.6289 18.981ZM87.9113 21.3699L84.3393 24.141L80.6286 21.2314V19.5004L87.5298 14.8957V14.6866L84.0966 9.42417L76.5711 13.4431V22.9971L75.0798 24.141L75.3226 24.4497L76.6751 23.3765L81.5996 26.9439L88.1888 21.7507L87.9113 21.3699ZM77.4034 2.29367C77.4034 1.84215 77.2993 1.46276 77.126 0.943448H76.7792C76.3283 2.15519 75.7734 2.81154 74.3516 2.81154C73.1031 2.81154 72.1321 2.05132 71.6119 1.49594C71.6119 1.53056 67.4503 6.30827 67.4503 6.30827L67.7971 6.6213L68.9762 5.27108C69.8779 5.96206 70.5368 6.6213 72.5482 6.65448V18.7733L64.017 4.02328C63.3581 2.91541 62.2484 1.2536 60.2023 1.2536C57.9134 1.2536 55.798 3.22844 56.0754 6.55206H56.4916C56.5956 5.65191 57.0464 4.68252 58.0521 4.68252C58.8498 4.68252 59.578 5.44275 59.9595 6.13661V10.8797C57.3239 10.8797 55.5899 12.0914 55.5899 14.2365C55.5899 15.3444 56.1448 17.2139 57.9828 17.5601L58.0175 17.2485C57.7747 17.0062 57.5319 16.7307 57.5319 16.2445C57.5319 15.4497 58.1215 14.9289 59.1966 14.9289C59.37 14.9289 59.8555 14.9635 59.9595 14.9996V21.1622C56.873 21.1953 54.4801 22.8918 54.4801 25.8014C54.4801 28.5711 56.873 29.8867 59.37 29.7467L59.4046 29.402C57.8441 29.2289 57.0117 28.5018 57.0117 27.4978C57.0117 26.25 57.9134 25.5937 59.0578 25.5937C60.237 25.5937 61.2773 26.3207 62.0056 27.1516L66.2019 22.4778L65.8551 22.1647L64.78 23.3765C63.1847 21.9584 62.2831 21.4377 60.445 21.1622V6.58524L72.2014 27.0477H73.0338V6.65448C75.2879 6.516 77.4034 4.81957 77.4034 2.29367ZM42.2398 18.981V11.8491L42.4825 11.6745L45.6731 16.696L42.2398 18.981ZM49.5227 21.3699L45.9507 24.141L42.24 21.2314V19.5004L49.1412 14.8957V14.6866L45.7079 9.42417L38.1825 13.4431V22.9971L36.6912 24.141L36.934 24.4497L38.2865 23.3765L43.211 26.9439L49.8001 21.7507L49.5227 21.3699ZM22.8886 22.9278L20.9465 24.3819L21.1893 24.6589L22.1256 24.0011L25.3855 26.9771L29.7551 24.0703L29.5471 23.7587L28.4026 24.4858L26.9808 23.0663V13.0955L28.1599 12.2285L30.6568 14.2365V23.0663C30.6568 28.5711 29.443 29.4712 26.9461 30.3714V30.7522C31.073 30.9253 34.7837 29.5405 34.7837 22.4778V12.9916L36.1015 11.9515L35.8587 11.6414L34.7143 12.5415L31.1423 9.4588L26.9808 12.5761V0.597245H26.6686L21.5014 4.05935V4.3695C22.0216 4.68253 22.8886 4.88882 22.8886 6.62131V22.9278ZM7.45628 19.7081L5.68762 20.5736C4.68191 19.258 4.023 17.4923 4.023 15.0342C4.023 14.0288 4.12704 12.7824 4.43916 11.9169L7.49096 10.5681L7.45628 19.7081ZM20.1142 3.60928C20.1142 0.735726 17.4092 -0.0966221 15.155 0.00868368V0.4602C16.5075 0.491936 17.5479 0.943453 17.5479 1.84216C17.5479 2.46678 17.0971 3.26162 15.7446 3.26162C14.6695 3.26162 12.5887 2.63989 10.9241 2.08451C9.08607 1.46277 7.35209 0.874211 5.89554 0.874211C3.05181 0.874211 0.901671 2.9861 0.901671 5.58123C0.901671 7.69456 2.49693 8.45479 3.15585 8.73175L3.36393 8.38698C2.94777 8.10857 2.53161 7.79843 2.53161 6.96752C2.53161 6.34434 3.08649 5.33889 4.54303 5.33889C5.86086 5.33889 7.59484 5.92889 9.8837 6.58525C11.8604 7.13918 14.0453 7.65994 15.2244 7.79843V12.2977L13.0049 14.1341V14.3072L15.2244 16.2445V22.4431C14.0799 23.1009 12.7621 23.274 11.6177 23.274C9.50222 23.274 7.4908 22.7201 5.89554 20.9544L11.8604 18.0794V8.1432L4.54303 11.399C5.30599 9.4588 6.83189 8.17926 8.39248 7.24305L8.28844 6.89684C3.95348 8.0754 0 12.0554 0 16.9716C0 22.8586 4.78579 27.2194 10.2305 27.2194C16.126 27.2194 19.8714 22.6162 19.8021 17.7347L19.4553 17.6986C18.5883 19.5696 17.3398 21.3338 15.7099 22.27V16.2445L18.0681 14.3764L18.0334 14.1687L15.7099 12.2977V7.79843C17.86 7.79843 20.1142 6.34434 20.1142 3.60928Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="year">©2023</div>
            <div className="nyt-sensitive-user-info">
              We No Longer Sell Your Personal Information California Notices
              Limit the Use of My Sensitive Information
            </div>
            <div className="nyt-company-line-footer">
              <p className="about-footer"> About </p>
              The New York Times Company Privacy Policy Terms of Sale
            </div>
            <div className="questions-footer">
              <p className="help-line-footer"> Help</p>
              Frequently Asked Questions Contact Us Feedback
            </div>
          </div>
        </div> */}
      {/* </Slider> */}
    </div>
  );
};
export default Slides;
