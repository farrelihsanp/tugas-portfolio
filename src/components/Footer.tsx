import React from "react";
import ItemFooter from "../mini-components/ItemFooter";
import ListItemFooter from "../mini-components/ListItemFooter";

const Footer: React.FC = () => {
  return (
    <footer id="ContactSection" className="bg-black py-8 text-white p-8 px-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <ItemFooter name="Pages">
          <ListItemFooter href="#HeroSection">Home</ListItemFooter>
          <ListItemFooter href="#AboutMe">About Me</ListItemFooter>
          <ListItemFooter href="#SkillsSection">Skills</ListItemFooter>
          <ListItemFooter href="#PortfolioSection">Portfolio</ListItemFooter>
          <ListItemFooter href="#ExperienceSection">Experience</ListItemFooter>
          <ListItemFooter href="#TestimonialSection">
            Testimonial
          </ListItemFooter>
        </ItemFooter>

        <ItemFooter name="Information">
          <ListItemFooter href="https://purwadhika.com">
            Partnership
          </ListItemFooter>
          <ListItemFooter href="https://maps.app.goo.gl/THZENhquRwBq9F5K7">
            Office Maps
          </ListItemFooter>
          <ListItemFooter href="https://linkedin.com">Jobs</ListItemFooter>
        </ItemFooter>

        <ItemFooter name="Social Media">
          <ListItemFooter href="http://github.com">Github</ListItemFooter>
          <ListItemFooter href="http://youtube.com">Youtube</ListItemFooter>
          <ListItemFooter href="http://facebook.com">Facebook</ListItemFooter>
          <ListItemFooter href="http://x.com">Twitter</ListItemFooter>
          <ListItemFooter href="http://gmail.com">Gmail</ListItemFooter>
          <ListItemFooter href="http://yahoo.com">Yahoo</ListItemFooter>
        </ItemFooter>

        <div className="flex flex-col">
          <h5 className="font-bold text-lg mb-2">
            Subscribe to our newsletter
          </h5>
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-md p-2 mb-2"
          />
          <button className="bg-gray-500 text-white py-2 px-4 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
