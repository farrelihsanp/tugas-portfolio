import ItemNavbar from "../mini-components/ItemNavbar";

const Navbar = () => {
  return (
    <nav className="bg-white mt-8 shadow-md rounded-full p-4 mx-4 md:mx-40 flex flex-col md:flex-row items-center justify-between">
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
