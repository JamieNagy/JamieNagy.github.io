import React from "react";

const education = [
  {
    duration: "September 2015 - June 2019",
    degree: "Bachelor of Science in Computer Science",
    institution: "University A",
    highlights: [
      "Graduated with honors.",
      "Relevant coursework: Data Structures, Algorithms, Databases, Machine Learning.",
      "Member of the Computer Science Club.",
    ],
  },
  {
    duration: "September 2019 - June 2021",
    degree: "Master of Science in Software Engineering",
    institution: "University B",
    highlights: [
      'Thesis on "Optimizing Performance in Distributed Systems".',
      "Completed advanced coursework in software architecture and design.",
      "Graduate assistant in the Department of Computer Science.",
    ],
  },
  {
    duration: "September 2021 - June 2022",
    degree: "Certificate in Data Science",
    institution: "Online University",
    highlights: [
      "Focused on data analysis, machine learning, and data visualization.",
      "Completed projects involving real-world data sets.",
      "Learned tools like TensorFlow, scikit-learn, and Pandas.",
    ],
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
