import React from "react";

const Intro = () => {
  return (
    <section className="page-section portfolio" id="intro">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">
          Introduction
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <svg
              className="svg-inline--fa fa-star"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              ></path>
            </svg>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3" id="intro-123">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"></path>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"></path>
              </svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Education</h3>
            <p>
              I'm about to earn my Associate Degree this Spring in CUNY
              Queensborough Community College and will continue pursuing
              Bachelor's degree in Queens College this Fall. I maintain a 3.9
              GPA with Dean's list while working nearly full time to support
              myself. During my school years, I focused on modern web
              development and machine learning, actively engaging in numerous
              projects to hone these skills.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-pc-display"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"></path>
              </svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Skills</h3>
            <p>
              I possess expertise in Full Stack Web Development, with
              proficiency in front-end framework like React, and comprehensive
              back-end development capabilities with Node, Express, Flask, and
              Django. My experience extends to adept database integration with
              PostgreSQL and MongoDB. In the field of machine learning, I have
              expertise in traditional methods like regression, classification,
              and clustering, as well as advanced techniques including ANN, CNN,
              and reinforcement learning algorithms like Q-Learning, A3C, and
              PPO. Additionally, I am skilled in LLM-based NLP.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                ></path>
              </svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Experience</h3>
            <p>
              With a rich background in technology, I have developed elegant
              websites, sophisticated APIs, and accurate ML models, actively
              engaging in a variety of projects. My experience includes the
              practical application of third-party services and solutions, such
              as AWS, GCP, and numerous APIs. Additionally, my career has been
              diversified through roles as a medical office receptionist,
              waiter, office assistant, and tutor, enhancing my organizational,
              customer service, and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
