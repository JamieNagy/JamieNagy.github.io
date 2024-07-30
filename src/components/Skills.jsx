import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="page-section" id="my-skills">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">
          My Skills
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">Frontend Development</h3>
          <div className="row">
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <i className="fab fa-react skill-icon"></i>
                <h4 className="skill-title">React</h4>
                <p className="skill-description">
                  Expert in React development, proficient with advanced hooks,
                  including useContext and useReducer. Skilled in state
                  management using Redux, optimizing component performance, and
                  building efficient, scalable UIs. Experienced in integrating
                  modern libraries like million.js for seamless data flow and
                  intuitive user experiences. Proficient in using TanStack Query
                  for efficient data fetching, React Router for robust routing
                  solutions, TypeScript for type-safe coding, and Framer Motion
                  for creating fluid animations and interactive UI components.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icons">
                  <i className="fab fa-html5 skill-icon"></i>
                  <i className="fab fa-css3-alt skill-icon"></i>
                  <i className="fab fa-js-square skill-icon"></i>
                </div>
                <h4 className="skill-title">HTML, CSS, JS(ES6+)</h4>
                <p className="skill-description">
                  Proficient in the core technologies of frontend development -
                  HTML5, CSS3, and JavaScript (ES6+). Expertise in crafting
                  semantic HTML structures, creating modular and responsive CSS,
                  and writing efficient JavaScript. Experienced in developing
                  dynamic web applications with a focus on user experience,
                  performance, and cross-browser compatibility.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <i className="fab fa-bootstrap skill-icon"></i>
                <h4 className="skill-title">Bootstrap</h4>
                <p className="skill-description">
                  Highly proficient in utilizing Bootstrap for rapid UI
                  development. Skilled in leveraging its responsive grid system
                  and pre-designed components to create visually appealing and
                  mobile-first web designs. Adept at customizing Bootstrap
                  themes to align with specific design requirements and brand
                  identity.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/tailwind-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Tailwind CSS</h4>
                <p className="skill-description">
                  Highly skilled in Tailwind CSS, adept at leveraging advanced
                  utility-first principles to craft responsive and accessible
                  designs. Experienced in customizing configurations, optimizing
                  for production builds, and integrating with frameworks like
                  React. Expert at creating dynamic, scalable UI components with
                  streamlined workflows.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/nextjs-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Next.js</h4>
                <p className="skill-description">
                  Proficient in Next.js, excelling at server-side rendering
                  (SSR), static site generation (SSG), and optimizing
                  performance. Skilled in advanced routing, API integration, and
                  deploying on platforms like Vercel. Expert at crafting highly
                  scalable, SEO-friendly, and efficient web applications with
                  seamless client-server transitions.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/jest-snapshot-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Jest</h4>
                <p className="skill-description" id="frontend-build-tools-des">
                  Experienced in Jest, adept at writing comprehensive unit and
                  integration tests for JavaScript applications. Skilled in
                  leveraging mocking, coverage reports, and custom matchers to
                  ensure code reliability. Expert at streamlining CI/CD
                  pipelines, ensuring rapid and robust testing workflows.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/framer-motion.svg"
                    alt="framer-motion"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Animating</h4>
                <p className="skill-description" id="frontend-build-tools-des">
                  Proficient in creating engaging animations using both vanilla
                  CSS and Framer Motion. Experienced in leveraging CSS
                  animations and transitions to enhance user interfaces with
                  smooth, performant animations. Skilled in using keyframes,
                  transforms, and transitions to bring static designs to life.
                  Additionally, adept at utilizing Framer Motion to create
                  complex animations and interactive experiences in React
                  applications. Capable of designing fluid, responsive
                  animations that enhance user engagement and improve overall
                  UX.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/seo.png"
                    alt="seo"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">SEO</h4>
                <p className="skill-description" id="frontend-build-tools-des">
                  Expert in SEO, proficient in advanced on-page and off-page
                  optimization techniques. Skilled in keyword research,
                  technical SEO audits, and content strategy. Adept at enhancing
                  site visibility and user engagement through schema markup,
                  site speed optimization, and mobile-first indexing.
                  Experienced with analytics tools to track and improve SERP
                  rankings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">Backend Development</h3>
          <div className="row">
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <i className="fab fa-node skill-icon"></i>
                <h4 className="skill-title">Node.js & Express.js</h4>
                <p className="skill-description">
                  Specialized in backend development with Node.js and
                  Express.js, proficient in crafting scalable, high-performance
                  server-side solutions. Experienced in leveraging Node.js's
                  event-driven architecture to build efficient applications,
                  seamlessly integrating a wide array of libraries and packages
                  for enhanced functionality. Adept at using Express.js for
                  streamlined routing, middleware management, and robust
                  handling of HTTP requests and responses. Skilled in creating
                  RESTful APIs, handling asynchronous operations, and
                  integrating databases and authentication systems.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/django.png"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Django</h4>
                <p className="skill-description">
                  Proficient in Django, skilled in developing robust web
                  applications with a focus on scalability and security. Expert
                  in Django Rest Framework, building modular, efficient APIs.
                  Experienced with advanced features like middleware and
                  signals. Strong in test automation using the Django testing
                  framework, ensuring comprehensive test coverage and smooth
                  CI/CD pipelines.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="flask-icon-div">
                  <img
                    src="assets/flask.png"
                    alt="Flask"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Flask</h4>
                <p className="skill-description">
                  Highly skilled in Flask, proficient in building lightweight,
                  scalable web applications. Expert in advanced features like
                  blueprints for modular architecture, application factory
                  patterns, and middleware integration. Adept at developing
                  secure APIs, managing user authentication, and implementing
                  testing strategies to ensure robust applications and seamless
                  CI/CD deployments.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="postgresql-icon-div">
                  <img
                    src="assets/postgresql.png"
                    alt="PostgreSQL"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">PostgreSQL & PgAdmin 4</h4>
                <p className="skill-description">
                  Experienced in harnessing the capabilities of PostgreSQL for
                  robust database solutions. Proficient in architecting and
                  administrating complex data schemas with a focus on
                  performance optimization and transactional integrity. Utilizes
                  PgAdmin 4 for intuitive database management, enabling
                  effective control over database functionalities and insightful
                  data analysis. Dedicated to employing PostgreSQL's
                  sophisticated features to construct resilient and scalable
                  back-end architectures that support high-volume data
                  transactions and complex query operations.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="mongodb-icon-div">
                  <img
                    src="assets/mongodb.png"
                    alt="MongoDB"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">MongoDB & Atlas</h4>
                <p className="skill-description">
                  Skilled in leveraging MongoDB for the development of
                  high-performance, scalable databases. Expertise in utilizing
                  MongoDB Atlas for cloud database management, ensuring seamless
                  deployment, and maintaining high availability. Proficient in
                  schema design, data aggregation, and implementing security
                  best practices with MongoDB to enhance application efficiency
                  and reliability.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <i className="fas fa-cogs skill-icon"></i>
                <h4 className="skill-title">Microservices Architecture</h4>
                <p className="skill-description">
                  Proficient in Microservices Architecture, with a focus on
                  building scalable and independently deployable services. Adept
                  at decomposing complex applications into smaller, loosely
                  coupled services, each running in its own process and
                  communicating with lightweight mechanisms, often an HTTP
                  resource API. Experienced in orchestrating microservices to
                  work cohesively, ensuring fault tolerance and employing
                  containerization technologies like Docker and Kubernetes for
                  consistent deployment and scalability.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <i className="fas fa-cloud skill-icon"></i>
                <h4 className="skill-title">Cloud Services</h4>
                <p className="skill-description">
                  Skilled in utilizing cloud services to enhance application
                  performance, scalability, and reliability. Proficient in
                  deploying and managing applications across various cloud
                  platforms, including AWS and Google Cloud. Familiar with a
                  broad range of cloud services, such as compute instances,
                  storage solutions, and managed databases, to create flexible,
                  resilient architectures. Experienced in leveraging
                  cloud-native technologies to build and maintain modern
                  applications that take full advantage of cloud capabilities
                  and services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">General</h3>
          <div className="row">
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/docker-svgrepo-com.svg"
                    alt="Docker"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Docker</h4>
                <p className="skill-description">
                  Proficient in Docker, skilled in building efficient
                  containerized environments for scalable applications. Expert
                  in creating custom Dockerfiles, multi-stage builds, and using
                  Compose for multi-container orchestration. Adept at optimizing
                  CI/CD workflows, securing containers, managing persistent
                  storage, and leveraging advanced networking features for
                  microservices architecture and seamless application
                  deployment.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icons">
                  <i className="fab fa-git-alt skill-icon"></i>
                  <i className="fab fa-github skill-icon"></i>
                </div>
                <h4 className="skill-title">
                  Version Control, CI/CD - Git & GitHub
                </h4>
                <p className="skill-description">
                  Proficient in using Git for version control, adept at managing
                  and tracking changes in source code during software
                  development. Experienced in branching, merging, and resolving
                  conflicts to maintain code integrity and facilitate
                  collaborative workflows. Skilled in leveraging GitHub for
                  remote repository management, pull requests, and code reviews,
                  enhancing team collaboration and code quality. Knowledgeable
                  in GitHub Actions for CI/CD pipelines, automating build and
                  deployment processes for efficient software delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="skills-category">
          <h3 className="category-title">Machine Learning & AI</h3>
          <div className="row">
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/pandas-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                  <img
                    src="assets/numpy-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Pandas & Numpy</h4>
                <p className="skill-description">
                  Specializes in leveraging Python for sophisticated data
                  analysis and machine learning applications. Utilizes Pandas
                  and NumPy for data wrangling and exploratory data analysis,
                  coupled with Scikit-Learn for developing and deploying
                  predictive models. Expert in extracting actionable insights
                  from data, applying machine learning algorithms to solve
                  real-world problems across various domains.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <i className="fas fa-chart-area skill-icon"></i>
                <h4 className="skill-title">Plotly, Matplotlib & Seaborn</h4>
                <p className="skill-description">
                  Experienced in Plotly, Matplotlib & Seaborn, adept at
                  visualizing complex data insights. Skilled in creating
                  interactive plots, statistical graphs, heatmaps, and
                  geographical visualizations, facilitating exploratory data
                  analysis, feature correlation, and storytelling for both
                  scientific and business data.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/scikit-learn.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Scikit-Learn</h4>
                <p className="skill-description">
                  Expert in Scikit-Learn, proficient in building machine
                  learning models for classification, regression, clustering,
                  and feature engineering. Skilled in deploying
                  cross-validation, hyperparameter tuning, and model evaluation
                  strategies to optimize predictive performance for real-world
                  datasets.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="flask-icon-div">
                  <img
                    src="assets/tensorflow-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">TensorFlow</h4>
                <p className="skill-description">
                  Proficient in TensorFlow, adept at developing deep learning
                  architectures like ANN, CNN, and RNN. Experienced in
                  reinforcement learning (Q-learning, Deep Q-learning, A3C, PPO,
                  SAC), model optimization, and deploying models across cloud
                  environments for scalable AI solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="flask-icon-div">
                  <img
                    src="assets/hugging-face-svgrepo-com.svg"
                    alt="Flask"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Hugging Face</h4>
                <p className="skill-description">
                  Skilled in Hugging Face libraries, focusing on natural
                  language processing (NLP) tasks, transformers, and LLMs. Adept
                  at implementing advanced techniques like LoRA, QLoRA,
                  tokenization, and padding, delivering high-performing models
                  for chatbots, translation, summarization, and more.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/pytorch-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">PyTorch</h4>
                <p className="skill-description">
                  Expert in PyTorch, skilled in developing deep learning
                  solutions for vision, NLP, and reinforcement learning tasks.
                  Adept at designing ANN, CNN, and transformers, while
                  leveraging advanced features like dynamic computation graphs,
                  LoRA, and distributed training to scale solutions effectively.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-3 mb-5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-block">
                <div className="skill-icon" id="django-icon-div">
                  <img
                    src="assets/selenium-svgrepo-com.svg"
                    alt="Django"
                    style={{ height: "4rem", width: "auto" }}
                  />
                </div>
                <h4 className="skill-title">Selenium</h4>
                <p className="skill-description">
                  Expert in Selenium, adept at automated data scraping across
                  dynamic web pages. Skilled in creating robust scripts that
                  handle JavaScript-rendered content, manage browser cookies,
                  and simulate user interactions. Experienced with parallel
                  scraping using multiple browser instances and managing IP
                  rotation, captchas, and rate limits to ensure consistent data
                  collection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
