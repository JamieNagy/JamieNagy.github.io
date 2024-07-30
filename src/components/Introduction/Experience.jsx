import React from "react";

const experiences = [
  {
    duration: "January 2020 - Present",
    title: "Release of Tailwind Nextjs Starter Blog v2.0",
    highlights: [
      "Release of Tailwind Nextjs Starter Blog template v2.0.",
      "Refactored with Nextjs App directory and React Server Components setup.",
      "Discover the new features and how to migrate from V1.",
    ],
    href: "/blog/release-of-tailwind-nextjs-starter-blog-v2.0",
    tags: ["next-js", "tailwind", "guide", "feature"],
  },
  {
    duration: "March 2018 - December 2019",
    title: "New features in v1",
    highlights: [
      "An overview of the new features released in v1.",
      "Code block copy, multiple authors, frontmatter layout and more.",
    ],
    href: "/blog/new-features-in-v1",
    tags: ["next-js", "tailwind", "guide"],
  },
  {
    duration: "June 2015 - February 2018",
    title: "Introducing Multi-part Posts with Nested Routing",
    highlights: [
      "The blog template supports posts in nested sub-folders.",
      "This can be used to group posts of similar content e.g. a multi-part course.",
      "This post is itself an example of a nested route!",
    ],
    href: "/blog/nested-route/introducing-multi-part-posts-with-nested-routing",
    tags: ["multi-author", "next-js", "feature"],
  },
  {
    duration: "January 2011 - May 2015",
    title: "Introducing Tailwind Nextjs Starter Blog",
    highlights: [
      "Looking for a performant, out of the box template.",
      "With all the best in web technology to support your blogging needs.",
      "Checkout the Tailwind Nextjs Starter Blog template.",
    ],
    href: "/blog/introducing-tailwind-nextjs-starter-blog",
    tags: ["next-js", "tailwind", "guide"],
  },
  {
    duration: "June 2008 - December 2010",
    title: "Deriving the OLS Estimator",
    highlights: [
      "How to derive the OLS Estimator with matrix notation.",
      "A tour of math typesetting using markdown with the help of KaTeX.",
    ],
    href: "/blog/deriving-ols-estimator",
    tags: ["next-js", "math", "ols"],
  },
];

const Experience = () => {
  return (
    <main className="mb-auto px-40 md:px-60 lg:px-80">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-700 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Experience
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A blog created with Next.js and Tailwind.css
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {experiences.map((exp, index) => (
            <li key={index} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Duration</dt>
                    <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-500">
                      {exp.duration}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a
                            className="text-gray-900 dark:text-gray-600"
                            href={exp.href}
                          >
                            {exp.title}
                          </a>
                        </h2>
                        <div className="flex flex-wrap">
                          {exp.tags.map((tag, index) => (
                            <a
                              key={index}
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href={`/tags/${tag}`}
                            >
                              {tag}
                            </a>
                          ))}
                        </div>
                      </div>
                      <ul className="list-disc list-inside prose max-w-none text-gray-700 dark:text-gray-400">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${exp.title}"`}
                        href={exp.href}
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center pt-8"></div>
    </main>
  );
};

export default Experience;
