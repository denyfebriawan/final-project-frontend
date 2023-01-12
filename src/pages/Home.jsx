import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SliderAuto from "../components/slider/Slide";
import Sliderss from "../components/slider2/Slider2";


const Home = () => {
    return(
      <>
         <SliderAuto/>
         <div style={{ padding: '50px' }}></div>
         <Sliderss/>
         <div style={{ padding: '50px' }}></div>
      </>
    )
}
export default Home