import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SliderAuto from "../components/slider";
import Sliderss from "../components/slider2/Slider2";


const Home = () => {
    return(
      <>
        <div className="wrapper">
        <div className="content">
         <SliderAuto/>
         <Sliderss/>
         </div>
         </div>
      </>
    )
}
export default Home