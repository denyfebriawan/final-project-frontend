import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Navbar = () => {
    return(
      <>
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
      </>
      
    )
}
export default Navbar