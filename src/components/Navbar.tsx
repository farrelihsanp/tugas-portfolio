import ItemNavbar from "../mini-components/ItemNavbar";

const Navbar = () => {
  return (
    <nav className="p-4 max-w-[1100px] px-4 my-4 mx-auto bg-white mt-8 shadow-md rounded-full md:mx-auto flex flex-col md:flex-row items-center justify-between border-2 border-gray-300">
      <div className="mb-4 md:mb-0">
        <div>
          <h1 className="text-1xl font-bold text-center text-blue-black">
            Farrel Portfolio
          </h1>
        </div>
      </div>
      <div className="flex gap-3 justify-center flex-wrap flex-grow">
        <ItemNavbar href="#HeroSection">Home</ItemNavbar>
        <ItemNavbar href="#AboutMe">About Me</ItemNavbar>
        <ItemNavbar href="#SkillsSection">Skills</ItemNavbar>
        <ItemNavbar href="#PortfolioSection">Portfolio</ItemNavbar>
        <ItemNavbar href="#ExperienceSection">Experience</ItemNavbar>
        <ItemNavbar href="#TestimonialSection">Testimonial</ItemNavbar>
        <ItemNavbar href="#ContactSection">Contact</ItemNavbar>
      </div>
    </nav>
  );
};

export default Navbar;
