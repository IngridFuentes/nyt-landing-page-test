import React, { useRef, useEffect } from 'react';
// import Images from './Components/Images/Images';
// import Footer from './Components/Footer/Footer';
// import File from './Components/Images/File';
import './App.css';
import Slides from './Components/Images/Slides';


function App() {

  const handleScroll = (e) => {
    console.log(e, 'event')
     window.scrollBy(e.deltaY, 0)
   }
  window.addEventListener('wheel', handleScroll);

  return (
    <div className="App">
      <Slides />
    </div>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import './App.css';
// // import { ReactComponent as NyTimesLogo } from './data/images/nytimes-wordmark.svg';
// // import  jsonData  from './data/data.json';
// const App = () => {



//   const isElementVisible = (element) => {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.bottom >= 0
//     );
//   }


//   useEffect(() => {
//     const scrollableElement = document.querySelector('.main-section');
    
//     let isWheelListenerActive = true; // Track whether the wheel listener is currently active
  
//     const scrollHandler = (ev) => {
//       ev.preventDefault();
//       const scrollSpeed = .1;  // Adjust this value to control the scroll speed
//       scrollableElement.scrollLeft += ev.deltaY * scrollSpeed;
  
//       // If we're scrolling down and have reached the end of the scrollable element, 
//       // or if we're scrolling up and have reached the start, remove the wheel event listener
//       if (
//         (ev.deltaY > 0 && scrollableElement.scrollWidth - scrollableElement.scrollLeft <= scrollableElement.clientWidth) ||
//         (ev.deltaY < 0 && scrollableElement.scrollLeft === 0)
//       ) {
//         scrollableElement.removeEventListener('wheel', scrollHandler);
//         isWheelListenerActive = false;
//       }

//     };
  
//     // Add scroll event listener when the .main-section becomes visible
//     window.addEventListener('scroll', () => {
//       if (isElementVisible(scrollableElement) && !isWheelListenerActive) {
//         scrollableElement.addEventListener('wheel', scrollHandler);
//         isWheelListenerActive = true;
//       } 
//     });
  
//     // Clean up function
//     return () => {
//       window.removeEventListener('scroll', () => {});
//       if (isWheelListenerActive) {
//         scrollableElement.removeEventListener('wheel', scrollHandler);
//       }
//     }
//   },[]);
  
  

//   const svgStyle = { 
//     fill: '#fff',
//   }

//   return (
//     <div className="App">
//        <section className='main-section'>
//         <a className="nav-logo" href="https://www.nytimes.com/" target="_blank" rel="noreferrer">
//           {/* <NyTimesLogo style={svgStyle}/> */}
//           NYT logo
//         </a>
//         <h2 className='section-title'>
//                             Following the threads of our interests and passions, wherever they take us, is exhilarating. 
//                             That’s why Times journalism not only reports on the issues that matter but illuminates 
//                             how they’re connected — so we can marvel at the complexity of our world as we come to understand it better.
//                         <br />
                       
//                         <p className='last-line-first-page'>More of life brought to life. </p>
//           </h2>
//       </section>

//       {/* <section className='top-section'>
//         <h2 className='section-title'>
//             {jsonData.sectionTitle}
//           </h2>
//       </section> */}

//       <section >
         
//                         <div className='jordan-sneakers'></div>
//                         <p className='text-center'> If you understand Sneakers, you start to understand Squeaking, Hardwood, and the art of Kareem’s famous Sky Hook. So you get Flying, our Changing World and Human Evolution, which was shaped by Chewing. So you can understand Gum, and when you realize how much of it is on the Street, you understand why some people never wear their Sneakers.
//                         </p>
//                         <p className='styles-line'>Styles</p>
//                         <div className='fight-sneakers-line'>The Fight for Sneakers
//                         By Daisuke Wakabayashi
//                         Oct. 15, 2021
//                         </div>
//       </section>
//     </div>
//   );
// }

// export default App;