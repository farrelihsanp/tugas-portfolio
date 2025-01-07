import ItemAboutMe from "../mini-components/ItemAboutMe";

function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="my-20 max-w-[1100px] mx-auto px-4 flex flex-col xl:flex-row space-y-4 md:space-x-4 items-center rounded-lg justify-center gap-3"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 min-w-[250px] h-[200px] flex flex-col items-center justify-center rounded-lg mb-4 md:mb-0 md:mr-4">
          <ItemAboutMe
            src="/src/assets/bx-comment-dots.svg"
            alt="Brief Bio Logo"
            name="Brief Bio"
            description="I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications. My expertise lies in HTML, CSS, JavaScript, React, and Next.js."
          />
        </div>
        <div className="flex-1 min-w-[250px] h-[200px] flex flex-col items-center justify-center rounded-lg mb-4 md:mb-0 md:mr-4">
          <ItemAboutMe
            src="/src/assets/bx-key.svg"
            alt="Core Skills Logo"
            name="Core Skills"
            description="My core skills include HTML, CSS, JavaScript, React, and Next.js. I have a strong foundation in these technologies, enabling me to build robust and interactive web applications."
          />
        </div>
        <div className="flex-1 min-w-[250px] h-[200px] flex flex-col items-center justify-center rounded-lg mb-4 md:mb-0">
          <ItemAboutMe
            src="/src/assets/bx-palette.svg"
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
