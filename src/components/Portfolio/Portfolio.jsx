import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import PortfolioItems from "./PortfolioItems"; // Assuming portfolioItems is in a separate file for better modularity.

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("Data Scientist");
  const [preloadedImages, setPreloadedImages] = useState([]);

  // Filter and sort portfolio items by selected tab, then sort by priority and title
  const filteredPortfolioItems = PortfolioItems.filter(
    (item) => item.affinity === selectedTab
  ).sort((a, b) => {
    // Sort by priority (higher first), then by title alphabetically if priorities are equal
    if (b.priority === a.priority) {
      return a.title.localeCompare(b.title);
    }
    return b.priority - a.priority;
  });

  // Preload all images when the component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = PortfolioItems.map((item) => item.image);

      try {
        const preloadPromises = imageUrls.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(preloadPromises);
        setPreloadedImages(imageUrls);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">
          Portfolio
        </h2>
        <TabContainer>
          {["Data Scientist", "Web Developer", "Miscellaneous"].map(
            (tab, index) => (
              <React.Fragment key={tab}>
                <TabButton
                  active={tab === selectedTab}
                  onClick={() => setSelectedTab(tab)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                  {tab === selectedTab && (
                    <DynamicLine
                      layoutId="underline"
                      transition={springTransition}
                    />
                  )}
                </TabButton>
                {index < 2 && <Separator>|</Separator>}
              </React.Fragment>
            )
          )}
        </TabContainer>

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

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="row justify-content-center cid-svMI8yuE9y">
              {filteredPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="item features-image col-12 col-md-6 col-lg-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div className="item-wrapper">
                    <div className="item-img">
                      {/* Only display the image if it's preloaded */}
                      {preloadedImages.includes(item.image) && (
                        <img
                          src={item.image}
                          className="img-fluid portfolio-img"
                          alt={item.alt}
                        />
                      )}
                    </div>
                    <div className="item-content">
                      <h5 className="item-title mbr-fonts-style display-5">
                        <strong>{item.title}</strong>
                      </h5>
                      <p className="mbr-text mbr-fonts-style mt-3 display-4">
                        {item.description}
                      </p>
                      <div className="portfolio-external-links">
                        {item.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            className="mbr-link mbr-fonts-style display-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>{link.text}</strong>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Framer Motion spring transition for tab underline
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

// Styled components
const TabContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
`;

const TabButton = styled(motion.button)`
  background-color: ${(props) => (props.active ? "#3498db" : "#ecf0f1")};
  border: none;
  color: ${(props) => (props.active ? "#ffffff" : "#7f8c8d")};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 12px; /* Increased roundness */
  position: relative;
`;

const DynamicLine = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  height: 4px;
  background-color: #f1c40f; /* Different color for the underline */
  border-radius: 2px;
  left: 0;
  right: 0;
`;

const Separator = styled.span`
  color: #7f8c8d;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export default Portfolio;
