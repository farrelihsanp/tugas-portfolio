import ItemAboutMe from "../mini-components/ItemAboutMe";

function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="max-w-[1100px] mx-auto px-4 item-center flex flex-col xl:flex-row space-y-4 md:space-x-4 items-center  rounded-lg justify-center gap-3"
    >
      <div className="flex-1 min-w-[250px] h-[200px] flex flex-col items-center justify-center rounded-lg">
        <ItemAboutMe
          src="/src/assets/bx-comment-dots.svg"
          alt="Brief Bio Logo"
          name="Brief Bio"
          description="I am a passionate web developer with a strong interest in creating dynamic and user-friendly web applications. My expertise lies in HTML, CSS, JavaScript, React, and Next.js."
        />
      </div>
      <div className="flex-1 min-w-[250px] h-[200px] flex flex-col items-center justify-center rounded-lg">
        <ItemAboutMe
          src="/src/assets/bx-key.svg"
          alt="Core Skills Logo"
          name="Core Skills"
          description="My core skills include HTML, CSS, JavaScript, React, and Next.js. I have a strong foundation in these technologies, enabling me to build robust and interactive web applications."
        />
      </div>
      <div className="flex-1 min-w-[250px] h-[200px] flex flex-col items-center justify-center rounded-lg">
        <ItemAboutMe
          src="/src/assets/bx-palette.svg"
          alt="Key Values Logo"
          name="Key Values"
          description="In my work, I prioritize timeliness, attention to detail, and clear communication. I believe that meeting deadlines is crucial for project success, and I strive to deliver high-quality work on time."
        />
      </div>
    </section>
  );
}

export default AboutMe;
