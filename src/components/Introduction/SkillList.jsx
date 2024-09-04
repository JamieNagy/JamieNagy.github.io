import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = {
  dataScientist: [
    {
      category: "Data Analysis and Visualizations",
      skills: ["Pandas", "Numpy", "Matplotlib and Seaborn", "Plotly"],
    },
    {
      category: "Machine Learning and Deep Learning",
      skills: ["Scikit-Learn", "TensorFlow", "PyTorch"],
    },
    {
      category: "Gen AI",
      skills: ["RAG", "HuggingFace", "LangChain", "PyTorch"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Deployment & Pipelines",
      skills: ["Git", "Docker", "GCP", "AWS"],
    },
  ],
  webDeveloper: [
    {
      category: "Frontend Web Development",
      skills: ["React", "NextJS", "TypeScript"],
    },
    {
      category: "Backend Web Development",
      skills: ["NodeJS", "ExpressJS", "TypeScript", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Deployment & Pipelines",
      skills: ["Git", "Docker", "GCP", "AWS"],
    },
  ],
};

const SkillList = () => {
  const [mode, setMode] = useState("dataScientist");

  const toggleMode = () => {
    setMode((prevMode) =>
      prevMode === "dataScientist" ? "webDeveloper" : "dataScientist"
    );
  };

  return (
    <main className="mb-auto px-40 md:px-60 lg:px-80">
      {/* Switch Toggle */}
      <div className="flex justify-end mb-8">
        <div className="relative w-72 h-12 bg-yellow-100 rounded-full flex items-center p-1 cursor-pointer">
          <motion.div
            className="absolute w-full h-full rounded-full flex justify-between px-4 items-center"
            onClick={toggleMode}
          >
            {/* Static labels for the switch */}
            <span
              className={`${
                mode === "dataScientist"
                  ? "font-bold text-gray-500"
                  : "text-gray-500"
              } transition duration-300`}
            >
              Data Scientist
            </span>
            <span
              className={`${
                mode === "webDeveloper"
                  ? "font-bold text-gray-500"
                  : "text-gray-500"
              } transition duration-300`}
            >
              Web Developer
            </span>
          </motion.div>

          {/* Text that moves with the blue button */}
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className={`absolute top-0 bottom-0 w-36 h-10 bg-blue-400 rounded-full shadow-md flex justify-center items-center text-white font-bold ${
              mode === "dataScientist" ? "left-0" : "right-0"
            }`}
          >
            <span className="text-white">
              {mode === "dataScientist" ? "Data Scientist" : "Web Developer"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Skill List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-700 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Skills
          </h1>
        </div>
        <motion.ul
          className="divide-y divide-gray-200 dark:divide-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={mode}
        >
          {skills[mode].map((skillCategory, index) => (
            <li key={index} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Category</dt>
                    <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-500">
                      {skillCategory.category}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <ul className="list-disc list-inside prose max-w-none text-gray-700 dark:text-gray-400">
                        {skillCategory.skills.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
};

export default SkillList;
