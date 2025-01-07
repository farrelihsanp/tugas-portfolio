const HeroSection = () => {
  return (
    <section
      id="HeroSection"
      className="max-w-[1100px] px-4 mx-auto xl:gap-8 flex flex-col lg:flex-row my-40 items-center justify-center"
    >
      <div className="mt-6 flex justify-center">
        <img
          src="/AVATAR-2.png" // Ensure this image is optimized
          alt="Foto Farrel"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-auto lg:h-auto mb-10 rounded-full object-cover" // Responsive sizing
          loading="lazy" // Lazy loading
        />
      </div>
      <div className="text-center xl:text-left xl:mr-8">
        <h1 className="text-2xl xl:text-3xl font-bold mb-4 text-black">
          Hello! <br />
          <span className="text-4xl xl:text-6xl">
            I'm Farrel Ihsan Prahaditya
          </span>
        </h1>
        <p className="text-base xl:text-xl mb-6 font-bold">
          As Senior FullStack Web Development
        </p>
        <p className="text-base xl:text-xl text-gray-700 mb-6">
          As a Fullstack Web Developer, I serve as a bridge between design and
          development, combining expertise in various technologies to create
          functional and engaging web applications.
        </p>
        <button className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ">
          <a href="#ContactSection">Contact Me</a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
