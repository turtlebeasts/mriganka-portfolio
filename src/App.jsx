import About from "./components/About";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import SkillsMarquee from "./components/SkillsMarquee";
import Socials from "./components/Socials";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Socials />
        <HeroSection />
        <SkillsMarquee />
        <ProjectsSection />
        <SkillSection />
        <Certifications />
        <Achievements />
        <About />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
