import React from 'react';

function Contact() {
    return (
  <section id="contact" className="page-section" style={{ backgroundColor: '#273b87' }}>
    <div className="container">
      <h2 className="text-center text-uppercase text-white">Contact Us</h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name *" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email *" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Your Message *" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ff7f50', borderColor: '#ff7f50' }}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}

export default Contact;
