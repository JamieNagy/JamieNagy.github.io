import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">
          Services
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-5">
            <div className="service-item mx-auto">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4 className="service-title">Web Development</h4>
              <p className="service-description">
                Design and develop hostable secure websites, ranging from small
                static pages to larger full-stack projects.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="service-item mx-auto">
              <div className="service-icon">
                <i className="fa-brands fa-bots"></i>
              </div>
              <h4 className="service-title">Automate your task</h4>
              <p className="service-description">
                Design customizing bot to automate repeatitive task such as
                data-entry and social media activity. Just let me know your
                demands!
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="service-item mx-auto">
              <div className="service-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>
              <h4 className="service-title">Data Analysis</h4>
              <p className="service-description">
                Provide advanced data analysis through machine learning
                algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
