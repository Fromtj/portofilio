import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-12 px-5">
      <div className="max-w-4xl mx-auto">
        {/* About Me */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a passionate Frontend Developer with experience in building responsive and
          dynamic web applications using modern technologies like{" "}
          <strong className="text-blue-500">
            Next.js, Tailwind CSS, React, JavaScript, and HTML
          </strong>
          . I enjoy creating clean and optimized code that enhances user experience.
        </p>

        {/* Work Experience */}
        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Work Experience
        </h2>

        <div className="space-y-6">
          {/* Job 1 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Frontend Developer
            </h3>
            <p className="text-gray-500">Tech Solutions Inc · Full-Time</p>
            <p className="text-sm text-gray-400">Jan 2023 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
              <li>Developed dynamic pages using Next.js and React.</li>
              <li>
                Built responsive designs using Tailwind CSS for optimized UX.
              </li>
              <li>
                Improved website performance and SEO with optimized code and Next.js
                features.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Web Development Intern
            </h3>
            <p className="text-gray-500">Creative Studio · Internship</p>
            <p className="text-sm text-gray-400">Jun 2022 - Dec 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
              <li>Worked with React to create reusable components.</li>
              <li>
                Designed responsive layouts using Tailwind CSS and HTML5.
              </li>
              <li>Collaborated with backend teams to integrate REST APIs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
