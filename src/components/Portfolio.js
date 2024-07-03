import React from 'react';

function Portfolio() {
    return (
  <section id="portfolio" className="bg-light page-section" style={{ backgroundColor: '#f0f0f0' }}>
    <div className="container">
      <h2 className="text-center text-uppercase text-dark-gray">Portfolio</h2>
      <div className="row">
        {/* Portfolio items here */}
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Project Name</h4>
            <p className="text-muted">Category</p>
          </div>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
    </div>
  </section>
);
}

export default Portfolio;
