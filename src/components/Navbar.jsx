
import { Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    transition: 'background-color 0.5s ease'
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarStyle({
          backgroundColor: '#333',
          transition: 'background-color 0.5s ease'
        });
      } else {
        setNavbarStyle({
          backgroundColor: 'transparent',
          transition: 'background-color 0.5s ease'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav style={navbarStyle } className="fixed-element">
          <div className="menu-icon">
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
  );
}

export default Navbar;