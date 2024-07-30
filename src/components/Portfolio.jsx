import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">
          Portfolio
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
        <div className="portfolio-disclaimer">
          <h4>A collection of projects developed by me</h4>
        </div>
        <div className="row justify-content-center cid-svMI8yuE9y">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="item features-image col-12 col-md-6 col-lg-4"
              whileHover={{ scale: 1.08 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <div className="item-wrapper">
                <div className="item-img">
                  <img
                    src={item.image}
                    className="img-fluid portfolio-img"
                    alt={item.alt}
                  />
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
                      <span
                        key={linkIndex}
                        className="mbr-link mbr-fonts-style display-7"
                      >
                        <strong>{link.text}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const portfolioItems = [
  {
    image: "assets/echoreads.png",
    alt: "EchoReads",
    title: "EchoReads",
    description: `A full stack web app for sharing articles. Users can read, create, edit, delete articles, as well as endorse and comment on them. Support Image upload and user profile management. Click "Visit Site" to see for yourself!`,
    links: [
      { href: "assets/project1.html", text: "Learn More" },
      { href: "https://echoreads.vercel.app/", text: "Visit Site" },
    ],
  },
  {
    image: "assets/AstroAnalytic.png",
    alt: "AstroInsight",
    title: "AstroInsight",
    description: `This data science project leverages time series analysis, machine learning, and geospatial visualization to provide predictive insights into space flight dynamics since 1957. It employs advanced analytics to forecast launch trends, assess mission outcomes, and optimize operational strategies.`,
    links: [{ href: "https://astro-insight.vercel.app/", text: "Visit Site" }],
  },
  {
    image: "assets/mdchatbot.png",
    alt: "Medical Doctor Chatbot",
    title: "Medical Doctor Chatbot",
    description: `An AI-driven chatbot to assist with medical queries. Utilized transformers and trl for fine-tuning a LLaMA model, enhanced with 4-bit quantization via BitsAndBytes for efficiency.`,
    links: [
      {
        href: "https://github.com/JamieDeveloper/md-chatbot-flask",
        text: "Github Repo",
      },
    ],
  },
  {
    image: "assets/lumishop.png",
    alt: "Lumishop",
    title: "Lumishop",
    description: `A MERN e-commerce app with a full-featured shopping cart, product reviews and ratings, top products carousel, pagination, search, user profiles, admin product, user, and order management, order delivery status, checkout process, and PayPal/credit card integration.`,
    links: [
      { href: "assets/lumishop-demo.pdf", text: "Major Screenshots" },
      { href: "https://lumishop.onrender.com/", text: "Visit Site" },
    ],
  },
  {
    image: "assets/scrapbot.png",
    alt: "Automation Bots Compilation",
    title: "Automation Bots Compilation",
    description: `This is a compilation of my automated bots designed to make my life easier, such as some that handle a variety of tasks in web development and some that scrape complicated data.`,
    links: [
      { href: "assets/scrapebots.html", text: "For Details, Click Here" },
    ],
  },
  {
    image: "assets/feasto.png",
    alt: "Food Order App",
    title: "Food Order App",
    description: `This is A full stack web app for streamlined food ordering. Utilized react for frontend; Django for backend, and MongoDB for DB. Include Redux, Typescript, Django rest framework, and more.`,
    links: [{ href: "assets/feasto.pdf", text: "Demo screenshot available" }],
  },
  {
    image: "assets/foodies.png",
    alt: "Meals App",
    title: "Meals App",
    description: `This is A full stack Next.js app for sharing meals. Built with app router. Below you can find a github repo for a demo.`,
    links: [
      {
        href: "https://github.com/JamieDeveloper/foodies.git",
        text: "Github Repo for Demo",
      },
    ],
  },
  {
    image: "assets/gomoku.png",
    alt: "Gomoku Game",
    title: "Gomoku Game",
    description: `A Gomoku game with my own AI built with tkinter. Can you beat the hard level?`,
    links: [
      {
        href: "https://github.com/JamieDeveloper/Jamie-Gomoku",
        text: "Github Repo",
      },
    ],
  },
  {
    image: "assets/shopnexus.png",
    alt: "ShopNexus (In Dev)",
    title: "ShopNexus (In Dev)",
    description: `My next multi-vendor e-commerce app, built on the MERN stack, features customer, seller, and admin accounts. Sellers can efficiently manage their shops and products, while admins oversee seller activation and product categories. The platform also includes live chat for seamless customer-seller communication, ensuring a dynamic and interactive shopping experience.`,
    links: [{ href: "assets/shopnexus-demo.pdf", text: "Dev Screenshots" }],
  },
];

export default Portfolio;
