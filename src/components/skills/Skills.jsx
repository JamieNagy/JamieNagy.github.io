import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillItems from "./SkillItems";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("machineLearning");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = {
    machineLearning: "Machine Learning & AI",
    frontend: "Frontend Development",
    backend: "Backend Development",
    general: "General",
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 20,
  };

  const renderSkills = (category) =>
    SkillItems[category].map((skill, index) => (
      <motion.div
        className="col-md-6 col-lg-3 mb-5"
        key={`${category}-${index}`}
        whileHover={{ scale: 1.08 }}
        transition={springTransition}
      >
        <div className="skill-block">
          {skill.icon && <i className={`${skill.icon} skill-icon`}></i>}
          {skill.icons && (
            <div className="skill-icons">
              {skill.icons.map((icon, idx) => (
                <i key={idx} className={`${icon} skill-icon`}></i>
              ))}
            </div>
          )}
          {skill.image && (
            <div className="skill-icon" id="django-icon-div">
              <img
                src={skill.image}
                alt={skill.title}
                style={{ height: "4rem", width: "auto" }}
              />
            </div>
          )}
          {skill.images && (
            <div className="skill-icon" id="django-icon-div">
              {skill.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={skill.title}
                  style={{ height: "4rem", width: "auto" }}
                />
              ))}
            </div>
          )}
          <h4 className="skill-title">{skill.title}</h4>
          <p className="skill-description">{skill.description}</p>
        </div>
      </motion.div>
    ));

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

        {/* Dropdown for selecting skill categories */}
        <div className="flex justify-center mb-5">
          <motion.div className="relative">
            <motion.button
              className="btn btn-secondary bg-gray-600 text-white py-2 px-4 rounded-md flex items-center justify-center"
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              transition={springTransition}
            >
              {categories[selectedCategory]}
              <i
                className={`ml-2 fas fa-chevron-${
                  dropdownOpen ? "up" : "down"
                }`}
              ></i>
            </motion.button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className="absolute mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-48"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={springTransition}
                >
                  {Object.entries(categories).map(([key, value]) => (
                    <motion.li
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={springTransition}
                    >
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setSelectedCategory(key);
                          setDropdownOpen(false);
                        }}
                      >
                        {value}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Render selected skills with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="row">{renderSkills(selectedCategory)}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
