import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SliderAuto from "../components/slider/Slide";
import Sliderss from "../components/slider2/Slider2";


const SubPage = () => {
    return(
      <>
         <SliderAuto/>
         <div style={{ padding: '50px' }}></div>
         <Sliderss/>
         <div style={{ padding: '50px' }}></div>
      </>
    )
}
export default SubPage