import React from "react";

const skills = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C++", "Ruby"],
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "Node.js", "HTML", "CSS"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Jenkins", "AWS", "Azure"],
  },
  {
    category: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
  },
];

const SkillList = () => {
  return (
    <main className="mb-auto px-40 md:px-60 lg:px-80">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-700 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Skills
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {skills.map((skillCategory, index) => (
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
        </ul>
      </div>
    </main>
  );
};

export default SkillList;
