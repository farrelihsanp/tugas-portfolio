import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import AboutMe from "./components/AboutMe";
import PortfolioSection from "./components/PortfolioSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-w-screen absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_70%_200px,#C9EBFF,transparent)] ">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
