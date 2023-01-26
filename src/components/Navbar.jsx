
import { Link} from 'react-router-dom';
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
        <nav style={navbarStyle} className="sticky">
          <div className="fixed-element">
          </div>
          <div className="logo">
            LOGO
          </div>
          <div className="menu">
            <ul>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/SubPage"}><li>Destination Page</li></Link>
              <Link to={"#"}><li>Login</li></Link>
              <Link to={"#"}><li>Register</li></Link>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;