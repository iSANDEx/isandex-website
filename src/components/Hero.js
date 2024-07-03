import React from 'react';

function Hero(){
    return (
  <header className="masthead text-white text-center" style={{ backgroundColor: '#273b87' }}>
    <div className="container d-flex align-items-center flex-column">
      <h1 className="masthead-heading mb-0">Pioneering Scientific Software Development and Medical Image Analysis</h1>
      <p className="masthead-subheading font-weight-light mb-0">Innovative solutions in algorithm implementation and DCE-MRI analysis for the healthcare industry</p>
      <a className="btn btn-primary btn-xl" href="#services" style={{ backgroundColor: '#ff7f50', borderColor: '#ff7f50' }}>Learn More</a>
    </div>
  </header>
);
}

export default Hero;
