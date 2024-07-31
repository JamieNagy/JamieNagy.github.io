import React from "react";

const Contact = () => {
  return (
    <section className="page-section" id="contact-me">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">
          Contact Me
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-envelope-open-text"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead mb-5">
              Reach out if you're looking for someone to turn complex ideas into
              elegant solutions.
            </p>
            <div className="contact-info d-flex justify-content-center">
              <div className="contact-item d-flex align-items-center">
                <i className="fas fa-map-marker-alt mr-3"></i>
                <div>
                  <p className="address">Queens, NY, USA</p>
                </div>
              </div>
              <div className="contact-item d-flex align-items-center">
                <i className="fas fa-mobile-alt mr-3"></i>
                <div>
                  <p className="phone">929-484-2089</p>
                </div>
              </div>
              <div className="contact-item d-flex align-items-center">
                <i className="fas fa-envelope mr-3"></i>
                <div>
                  <p className="email">
                    yuqiye093@gmail.com
                    <br />
                    <span className="text-small text-muted">(Preferred)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="social-icons">
              <a className="social-icon" href="https://github.com/JamieNagy">
                <i className="fab fa-github"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/jamie-n-48967a2b1/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
