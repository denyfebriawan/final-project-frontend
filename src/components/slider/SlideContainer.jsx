import React from 'react';
import { useRef } from 'react';
// import Swiper from 'swiper';

const SliderContainer = () => {
  const sliderRef = useRef(null);

  return (
    <>
            <div style={{ width: '100%', height: 'calc(100vh / 2)', display: 'flex' }}>
              <div style={{ width: 'calc(2/3 * 100%)' }}>
                <img src="Image" style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ width: 'calc(1/3 * 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                  <h1 style={{ textAlign: 'center' }}>Heading</h1>
                  <p style={{ textAlign: 'center' }}>Text</p>
                </div>
              </div>
            </div>
    </>
  );
}
export default SliderContainer