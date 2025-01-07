import React from "react";
import ItemExperience from "../mini-components/ItemExperience";

const ExperienceSection: React.FC = () => {
  return (
    <div
      id="ExperienceSection"
      className="mx-4 md:mx-16 lg:mx-32 h-auto bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center py-10"
    >
      <div className="p-4 md:p-6 lg:p-8 rounded-lg shadow-lg mx-2 md:mx-4 lg:mx-20 my-10 bg-white bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_90%_100px,#C9EBFF,transparent)]">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 text-blue-600">
          My Journey
        </h1>
        <p className="text-center mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
          As a Senior Full Stack Web Developer with over five years of
          experience, I have honed my skills in both front-end and back-end
          development, allowing me to create robust and scalable web
          applications. My journey began with a strong foundation in HTML, CSS,
          and JavaScript, which I complemented with frameworks like React and
          Angular for dynamic user interfaces.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <ItemExperience
            icon="🥇"
            company="XYZ Tech Solutions"
            title="Senior Full Stack Web Developer"
            date="2021 - Present"
            description="In my current role as a Senior Full Stack Web Developer at XYZ Tech Solutions, I lead the development of dynamic web applications, utilizing a range of technologies including React, Node.js, and MongoDB."
            jobdesk1="Designing and implementing scalable web architectures to enhance user experience and performance."
            jobdesk2="Mentoring junior developers, providing guidance on best practices in coding and software development methodologies."
            jobdesk3="Conducting code reviews to ensure adherence to industry standards and maintainability of codebases."
            jobdesk4="Collaborating with cross-functional teams to define, design, and ship new features."
          />
          <ItemExperience
            icon="🥈"
            company="ABC Digital Agency"
            title="Full Stack Developer"
            date="2018 - 2021"
            description="At ABC Digital Agency, I worked as a Full Stack Developer, where I was responsible for both front-end and back-end development."
            jobdesk1="Developing responsive web applications using HTML, CSS, JavaScript, and PHP, ensuring compatibility across various devices and browsers."
            jobdesk2="Integrating RESTful APIs to enhance application functionality and improve data management."
            jobdesk3="Collaborating with designers to create user-friendly interfaces and improve overall user engagement."
            jobdesk4="Participating in Agile development processes, contributing to sprint planning and retrospectives."
          />
          <ItemExperience
            icon="🥉"
            company="Tech Inc."
            title="Junior Web Developer"
            date="2016 - 2018"
            description="As a Junior Web Developer at Tech Innovations Inc., I gained foundational experience in web development."
            jobdesk1="Assisting in the development of web applications using JavaScript, jQuery, and Bootstrap."
            jobdesk2="Supporting the maintenance and optimization of existing websites to improve performance and user experience."
            jobdesk3="Learning and applying best practices in coding and version control using Git."
            jobdesk4="Collaborating with senior developers to troubleshoot and resolve technical issues."
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
