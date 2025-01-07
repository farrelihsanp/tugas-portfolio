import ItemNavbar from "../mini-components/ItemNavbar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 max-w-[1100px] mx-auto bg-white mt-8 shadow-lg rounded-lg border border-gray-300">
      <div className="flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-800">Farrel Portfolio</h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:gap-4 ${
            isOpen ? "flex" : "hidden"
          } xl:flex`}
        >
          <ItemNavbar href="#HeroSection">Home</ItemNavbar>
          <ItemNavbar href="#AboutMe">AboutMe</ItemNavbar>
          <ItemNavbar href="#SkillsSection">Skills</ItemNavbar>
          <ItemNavbar href="#PortfolioSection">Portfolio</ItemNavbar>
          <ItemNavbar href="#ExperienceSection">Experience</ItemNavbar>
          <ItemNavbar href="#TestimonialSection">Testimonial</ItemNavbar>
          <ItemNavbar href="#ContactSection">Contact</ItemNavbar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
