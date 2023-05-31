import React, { useRef, useEffect } from 'react';
import './App.css';
import Slides from './Components/Images/Slides';


function App() {

  // const handleScroll = (e) => {
  //   console.log(e, 'event')
  //    window.scrollBy(e.deltaY, 0)
  //  }
  // window.addEventListener('wheel', handleScroll);

  return (
    <div className="App">
      <Slides />
    </div>
  );
}

export default App;

