import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Footer = () => {
    return(
      <>
        <div className="wrapper">
            <footer className="py-4 bg-dark">
                <div className='container tengah'>
                    <div className="container lingkaran" style={{backgroundImage: 'url("../assets/image/profile/denny.jpg")'}} />
                    <div className="lingkaran" style={{backgroundImage: 'url("../assets/image/profile/deny.png")'}} />
                    <div className="lingkaran" style={{backgroundImage: 'url("../assets/image/profile/Varland Profile.webp")'}} />
                    <div className="lingkaran" style={{backgroundImage: 'url("gambar4.jpg")'}} />
                </div>
            {/* </footer>
            <footer className="py-5 bg-dark"> */}
                <div className="container px-5"><p className="m-0 text-center text-white">© 2022 AdventureSeekers. All Rights Reserved</p></div>
            </footer>
         </div>
      </>
    )
}
export default Footer