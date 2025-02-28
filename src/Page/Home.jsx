
import AboutMe from "../Components/AboutMe";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div className="font-sans bg-cyan-200">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;