const PortfolioItems = [
  {
    image: "assets/echoreads.png",
    alt: "EchoReads",
    title: "EchoReads",
    description: `A full stack web app for sharing articles. Users can read, create, edit, delete articles, as well as endorse and comment on them. Support Image upload and user profile management. Click "Visit Site" to see for yourself!`,
    links: [
      { href: "assets/project1.html", text: "Learn More" },
      { href: "https://echoreads.vercel.app/", text: "Visit Site" },
    ],
    affinity: "Web Developer",
    sub_affinity: ["Full Stack"],
    priority: 100,
  },
  {
    image: "assets/AstroAnalytic.png",
    alt: "AstroInsight",
    title: "AstroInsight",
    description: `This data science project leverages time series analysis, machine learning, and geospatial visualization to provide predictive insights into space flight dynamics since 1957. It employs advanced analytics to forecast launch trends, assess mission outcomes, and optimize operational strategies.`,
    links: [{ href: "https://astro-insight.vercel.app/", text: "Visit Site" }],
    affinity: "Data Scientist",
    sub_affinity: ["Machine Learning", "Data Analysis"],
    priority: 80,
  },
  {
    image: "assets/mdchatbot.png",
    alt: "Medical Doctor Chatbot",
    title: "Medical Doctor Chatbot",
    description: `An AI-driven chatbot to assist with medical queries. Utilized transformers and trl for fine-tuning a LLaMA model, enhanced with 4-bit quantization via BitsAndBytes for efficiency.`,
    links: [
      {
        href: "https://github.com/JamieNagy/md-chatbot-flask",
        text: "Github Repo",
      },
    ],
    affinity: "Data Scientist",
    sub_affinity: ["AI"],
    priority: 70,
  },
  {
    image: "assets/real_estate.png",
    alt: "Real Estate Price Prediction",
    title: "Real Estate Price Prediction",
    description: `Predicting real estate prices using a stacked ensemble model, combining Random Forest, XGBoost, LightGBM, CatBoost, and an Artificial Neural Network. It features rigorous EDA, custom stacking logic, and Bayesian optimization.`,
    links: [
      {
        href: "https://github.com/JamieNagy/Real-Estate-Regression",
        text: "Github Repo",
      },
    ],
    affinity: "Data Scientist",
    sub_affinity: ["AI"],
    priority: 95,
  },
  {
    image: "assets/disaster_survival.png",
    alt: "Disaster Survival Prediction",
    title: "Disaster Survival Prediction",
    description: `Analyzed ship disaster data and built a CatBoost model that can predict whether a passenger survived based on various features`,
    links: [
      {
        href: "https://github.com/JamieNagy/disaster-survival",
        text: "Github Repo",
      },
    ],
    affinity: "Data Scientist",
    sub_affinity: ["AI"],
    priority: 60,
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
    affinity: "Web Developer",
    sub_affinity: ["Full Stack"],
    priority: 95,
  },
  {
    image: "assets/scrapbot.png",
    alt: "Automation Bots Compilation",
    title: "Automation Bots Compilation",
    description: `This is a compilation of my automated bots designed to make my life easier, such as some that handle a variety of tasks in web development and some that scrape complicated data.`,
    links: [
      { href: "assets/scrapebots.html", text: "For Details, Click Here" },
    ],
    affinity: "Miscellaneous",
    sub_affinity: ["Automation"],
    priority: 80,
  },
  {
    image: "assets/feasto.png",
    alt: "Food Order App",
    title: "Food Order App",
    description: `This is A full stack web app for streamlined food ordering. Utilized react for frontend; Django for backend, and MongoDB for DB. Include Redux, Typescript, Django rest framework, and more.`,
    links: [{ href: "assets/feasto.pdf", text: "Demo screenshot available" }],
    affinity: "Web Developer",
    sub_affinity: ["Full Stack"],
    priority: 50,
  },
  {
    image: "assets/foodies.png",
    alt: "Meals App",
    title: "Meals App",
    description: `This is A full stack Next.js app for sharing meals. Built with app router. Below you can find a github repo for a demo.`,
    links: [
      {
        href: "https://github.com/JamieNagy/foodies.git",
        text: "Github Repo for Demo",
      },
    ],
    affinity: "Web Developer",
    sub_affinity: ["Full Stack"],
    priority: 60,
  },
  {
    image: "assets/gomoku.png",
    alt: "Gomoku Game",
    title: "Gomoku Game",
    description: `A Gomoku game with my own AI built with tkinter. Can you beat the hard level?`,
    links: [
      {
        href: "https://github.com/JamieNagy/Jamie-Gomoku",
        text: "Github Repo",
      },
    ],
    affinity: "Miscellaneous",
    sub_affinity: ["GUI"],
    priority: 50,
  },
];

export default PortfolioItems;
