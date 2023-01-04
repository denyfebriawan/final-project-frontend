import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import PauseOnHover from "../components/slider";
import CarouselSample from "../components/carousel";

const Home = () => {
    return(
      <>
        <div className="wrapper">
        <div className="content">
         <PauseOnHover/>
         <CarouselSample/>
         </div>
         </div>
      </>
    )
}
export default Home