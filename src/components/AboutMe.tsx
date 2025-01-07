import ItemAboutMe from "../mini-components/ItemAboutMe";

function AboutMe() {
  return (
    <div
      id="AboutMe"
      className="flex flex-col mx-40 xl:flex-row space-y-4 md:space-x-4 items-center p-6 rounded-lg justify-center gap-3"
    >
      <ItemAboutMe
        src="/src/assets/bx-comment-dots.svg"
        alt="Brief Bio Logo"
        name="Brief Bio"
        description="I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications. My expertise lies in HTML, CSS, JavaScript, React, and Next.js."
      />
      <ItemAboutMe
        src="/src/assets/bx-key.svg"
        alt="Core Skills Logo"
        name="Core Skills"
        description="My core skills include HTML, CSS, JavaScript, React, and Next.js. I have a strong foundation in these technologies, enabling me to build robust and interactive web applications."
      />
      <ItemAboutMe
        src="/src/assets/bx-palette.svg"
        alt="Key Values Logo"
        name="Key Values"
        description="In my work, I prioritize timeliness, attention to detail, and clear communication. I believe that meeting deadlines is crucial for project success, and I strive to deliver high-quality work on time."
      />
    </div>
  );
}

export default AboutMe;
