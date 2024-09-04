import React, { useEffect } from "react";
import Header from "./components/Header";
// import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import "./App.css";
import "./intro.css";
import Tabs from "./components/Introduction/Tabs";

const App = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const avatarY = useTransform(scrollY, [0, 600], [0, -40]); // Slower movement

  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  const bounceTransition = {
    type: "spring",
    stiffness: 400,
    damping: 10,
    mass: 0.75,
  };

  const handleNavClick = (e, section) => {
    e.preventDefault();
    const target = document.querySelector(`#${section}`);
    const yOffset = -70; // Adjust offset for fixed navbar
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 1, ease: "easeOut" },
    });

    document
      .querySelectorAll(".nav-link")
      .forEach((link) => link.classList.remove("active"));
    document
      .querySelector(`.nav-item a[href="#${section}"]`)
      .classList.add("active");
  };

  useEffect(() => {
    // Simulate a click on the "Header" link when the page loads
    const initialEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    handleNavClick(initialEvent, "header");

    const onScroll = () => {
      const header = document.querySelector(".masthead");
      const navbar = document.querySelector(".navbar");
      const navbarPlaceholder = document.querySelector(".navbar-placeholder");
      const headerHeight = header.offsetHeight;
      const homeNavLink = document.querySelector('.nav-item a[href="#header"]');

      if (window.pageYOffset > headerHeight) {
        if (!navbar.classList.contains("navbar-fixed")) {
          navbar.classList.add("navbar-fixed");
          navbar.style.top = "-70px";
          setTimeout(() => {
            navbar.style.top = "0";
          }, 100);
          navbarPlaceholder.style.display = "block";
        }
      } else {
        navbar.classList.remove("navbar-fixed");
        navbarPlaceholder.style.display = "none";
        document
          .querySelectorAll(".nav-link")
          .forEach((link) => link.classList.remove("active"));
        homeNavLink.classList.add("active");
      }
    };

    const updateNavHighlight = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const sectionElements = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      let middleScreenPosition = window.pageYOffset + window.innerHeight / 3;

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          middleScreenPosition >= sectionTop &&
          middleScreenPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            if (
              section.getAttribute("id") ===
              navLink.getAttribute("href").substring(1)
            ) {
              navLink.classList.add("active");
            }
          });
        }
      });

      // Ensure the last section is highlighted when reaching the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
          if (navLink.getAttribute("href").substring(1) === "contact-me") {
            navLink.classList.add("active");
          }
        });
      }

      // Ensure the header link is active when at the top of the page
      if (window.pageYOffset === 0) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        document
          .querySelector('.nav-item a[href="#header"]')
          .classList.add("active");
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", updateNavHighlight);
    updateNavHighlight();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", updateNavHighlight);
    };
  }, []);

  return (
    <div>
      <Header
        handleNavClick={handleNavClick}
        springTransition={springTransition}
        bounceTransition={bounceTransition}
        y={y}
        opacity={opacity}
        avatarY={avatarY}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Tabs />
        {/* <Intro /> */}
        <hr />
        <Portfolio />
        <hr />
        <Skills />
        <hr />
        <Services />
        <hr />
        <Contact />
      </motion.div>
    </div>
  );
};

export default App;
