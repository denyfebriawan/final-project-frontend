import React from 'react';

var SlideContainer = React.createClass({
    render: function() {
      return (
  
        <div style={{width: '100%', height: 'calc(100vh / 3)', display: 'flex'}}>
          <div style={{width: 'calc(2/3 * 100%)'}}>
            <img src="image.jpg" style={{width: '100%', height: '100%'}} />
          </div>
          <div style={{width: 'calc(1/3 * 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <h2 style={{textAlign: 'center'}}>Heading</h2>
              <p style={{textAlign: 'center'}}>Text</p>
            </div>
          </div>
        </div>
      );
    }
  });

  export default SlideContainer;