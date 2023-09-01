import "../tailwind.css";
// import { Link } from "react-router-dom";
import React, { forwardRef } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";

const Home = forwardRef(({aboutRef}, ref) => {
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 110);
  }
  return (
    <section ref={ref} id="home" className="min-h-[calc(100vh-100px)] bg-green md:px-24 lg:px-40 flex w-full items-center">
      <div className="font-main text-primary p-10">
        <RevealFromBtm delay={1.25} duration={0.5}>
          <h2 className="text-xl md:text-2xl text-primary font-main">Hello! I'm</h2>
        </RevealFromBtm>
        <RevealFromBtm delay={1.4} duration={0.5}>
          <h1>
            <span className="text-5xl md:text-6xl font-semibold align-middle text-primary font-main">
              Nancy Wu.
            </span>
          </h1>
        </RevealFromBtm>
        <RevealFromBtm delay={1.8} duration={0.75}>
          <p className="font-code text-sm md:text-base pt-8 pb-10 md:pb-14 max-w-xl text-grey">
            I’m a penultimate year Computer Science and Commerce student at the
            University of Auckland passionate about front-end development and the
            interconnection between business and technology.
          </p>
        </RevealFromBtm>
        <RevealFromBtm delay={2.2} duration={1}>
          <button onClick={() => scrollToRef(aboutRef)} className="px-8 md:px-10 py-2 md:py-3 text-xl md:text-2xl border-white border-2 rounded-md hover:bg-midGreen" 
                  >
            Find out more!
          </button>
        </RevealFromBtm>
      </div>
    </section>
  );
})

export default Home;
