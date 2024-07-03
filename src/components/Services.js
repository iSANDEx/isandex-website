import React from 'react';

function Services() {
    return (
  <section id="services" className="page-section" style={{ backgroundColor: '#f0f0f0' }}>
    <div className="container">
      <h2 className="text-center text-uppercase text-dark-gray">Services</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" style={{ color: '#6a93d4' }}></i>
            <i className="fas fa-code fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Scientific Software Development</h4>
          <p className="text-muted">We create robust, reliable, and scalable scientific software solutions.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" style={{ color: '#6a93d4' }}></i>
            <i className="fas fa-cogs fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Algorithm Implementation</h4>
          <p className="text-muted">Our team specializes in developing and implementing advanced algorithms.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" style={{ color: '#6a93d4' }}></i>
            <i className="fas fa-microscope fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Medical Image Analysis</h4>
          <p className="text-muted">We provide cutting-edge solutions for analyzing medical images, including DCE-MRI.</p>
        </div>
      </div>
    </div>
  </section>
);
}

export default Services;
