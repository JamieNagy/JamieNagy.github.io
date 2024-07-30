import React from "react";
import { motion } from "framer-motion";

const Header = ({
  handleNavClick,
  springTransition,
  bounceTransition,
  y,
  opacity,
}) => {
  return (
    <header className="masthead bg-primary text-white text-center" id="header">
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container" id="header-container">
          <a className="navbar-brand" href="index.html">
            Jamie<span>.</span>
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              {[
                "header",
                "intro",
                "portfolio",
                "my-skills",
                "services",
                "contact-me",
              ].map((section) => (
                <motion.li
                  key={section}
                  className="nav-item"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.a
                    href={`#${section}`}
                    className={`nav-link ${
                      section === "header" ? "active" : ""
                    }`}
                    whileHover={{ y: -3, transition: springTransition }}
                    whileTap={{ scale: 0.9, transition: bounceTransition }}
                    onClick={(e) => handleNavClick(e, section)}
                  >
                    <span>
                      {section.charAt(0).toUpperCase() +
                        section.slice(1).replace("-", " ")}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="navbar-placeholder"></div>
      <motion.div
        className="container d-flex align-items-center flex-column"
        id="home-screen"
        style={{ y, opacity }}
      >
        <img
          className="masthead-avatar my-5"
          src="assets/new_me2.jpg"
          alt="..."
        />
        <h1 className="masthead-heading text-uppercase mb-0">Jamie Nagy</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Full Stack Web Developer <br /> Machine Learning & AI Engineer
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
