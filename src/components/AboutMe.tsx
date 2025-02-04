import ItemAboutMe from "../mini-components/ItemAboutMe";

function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="my-20 max-w-[1100px] mx-auto px-4 flex flex-col xl:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center gap-3"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col items-center justify-center rounded-lg transition-transform transform hover:scale-105">
          <ItemAboutMe
            src="/bx-comment-dots.svg"
            alt="Brief Bio Logo"
            name="Brief Bio"
            description="I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications. My expertise lies in HTML, CSS, JavaScript, React, and Next.js."
          />
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg transition-transform transform hover:scale-105">
          <ItemAboutMe
            src="/bx-key.svg"
            alt="Core Skills Logo"
            name="Core Skills"
            description="My core skills include HTML, CSS, JavaScript, React, and Next.js. I have a strong foundation in these technologies, enabling me to build robust and interactive web applications."
          />
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg transition-transform transform hover:scale-105">
          <ItemAboutMe
            src="/bx-palette.svg"
            alt="Key Values Logo"
            name="Key Values"
            description="In my work, I prioritize timeliness, attention to detail, and clear communication. I believe that meeting deadlines is crucial for project success, and I strive to deliver high-quality work on time."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
