import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Navbar = () => {
    return(
      <>
        <div className="wrapper">
        <header>
          <nav>
            <div className="menu-icon">
              <i className="fa fa-bars fa-2x" />
            </div>
            <div className="logo">
              LOGO
            </div>
            <div className="menu">
              <ul>
                <Link to={"#"}><li>Home</li></Link>
                <Link to={"#"}><li>Detail Page</li></Link>
                <Link to={"#"}><li>Login</li></Link>
                <Link to={"#"}><li>Register</li></Link>
              </ul>
            </div>
          </nav>
        </header>
        {/* $(document).ready(function() {'{'}
        $(".menu-icon").on("click", function() {'{'}
        $("nav ul").toggleClass("showing");
        {'}'});
        {'}'});
        // Scrolling Effect
        $(window).on("scroll", function() {'{'}
        if($(window).scrollTop()) {'{'}
        $('nav').addClass('black');
        {'}'}
        else {'{'}
        $('nav').removeClass('black');
        {'}'}
        {'}'}) */}
      </div>
      </>
      
    )
}
export default Navbar