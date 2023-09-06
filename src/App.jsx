import { useRef } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialMedia from "./components/SocialMedia"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="bg-green">
      <Nav homeRef={homeRef} experienceRef={experienceRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <Home ref={homeRef} aboutRef={aboutRef}/>
      <About ref={aboutRef}/>
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
      <SocialMedia />
    </div>
  );
}

export default App;
