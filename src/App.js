import React, { useRef } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialMedia from "./components/SocialMedia"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
      {/* <Parallax pages={7}>
        <ParallaxLayer offset={0} sticky={{start: 0, end: 4}} speed={1}>
          <Nav homeRef={homeRef} experienceRef={experienceRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} factor={7} style={{ backgroundImage: `url(${ leaves })`, backgroundSize: 'cover'}}></ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <Home ref={homeRef} aboutRef={aboutRef}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <About ref={aboutRef}/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Experience ref={experienceRef} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <Projects ref={projectsRef}/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <Contact ref={contactRef}/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} sticky={{start: 0, end: 4}} speed={1}>
          <SocialMedia />
        </ParallaxLayer>
      </Parallax> */}
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
