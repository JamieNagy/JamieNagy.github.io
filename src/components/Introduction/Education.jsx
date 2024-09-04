import React from "react";

const education = [
  {
    duration: "May 2024 - May 2026 (Expected)",
    degree: "Bachelor in Computer Science",
    institution: "CUNY Queens College",
    highlights: [
      "Conduct Data Science projects weekly",
      "Relevant coursework: Data Structures, Algorithms, Databases, Machine Learning.",
      "Dean's list",
    ],
  },
  {
    duration: "Jan 2022 - May 2024",
    degree: "Associate in Computer Science and Information Security",
    institution: "CUNY Queensborough Community College",
    highlights: ["Participated in the coding club", "Dean's list"],
  },
];

const Education = () => {
  return (
    <main className="mb-auto px-40 md:px-60 lg:px-80">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-700 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Education
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {education.map((edu, index) => (
            <li key={index} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Duration</dt>
                    <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-500">
                      {edu.duration}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-600">
                          {edu.degree}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-500">
                          {edu.institution}
                        </p>
                      </div>
                      <ul className="list-disc list-inside prose max-w-none text-gray-700 dark:text-gray-400">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
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

export default Education;
