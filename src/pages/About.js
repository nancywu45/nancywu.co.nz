import React from "react";
import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJava,
  BiLogoReact,
} from "react-icons/bi";
import { PiFigmaLogoThin } from "react-icons/pi";
import nancy from "../assets/nancy.png";

const About = () => {
  return (
    <section className="min-h-screen w-screen bg-green px-10 md:px-20 lg:px-40 font-main text-primary flex-col">
      <div>
        <h2 className="text-3xl pt-30">about me</h2>
        <div className="md:flex">
          <div className="font-code my-4">
            <p className="my-3">
              My name is Nancy and I am in my third year of a Computer Science
              and Commerce degree at the University of Auckland.
            </p>
            <p className="my-3">
              I have had a passion for visual art and design since I was a kid,
              so naturally my passion in software leans toward front-end
              development. I have picked up an interest in self-teaching web
              development, with a desire to extend into mobile development in
              the near future.
            </p>
            <p className="my-3">
              Some of my other interests include graphic design, business and
              tech podcasts, films, trying new restaurants, and fitness.
            </p>
          </div>
          <img src={nancy} alt="nancy" className="w-20 py-20 object-contain" />
        </div>
      </div>
      <div>
        <h2 className="text-3xl pt-10 pb-3">technologies</h2>
        <div className="text-8xl flex flex-wrap">
          <BiLogoJavascript />
          <BiLogoReact />
          <BiLogoHtml5 />
          <BiLogoCss3 />
          <BiLogoPython />
          <BiLogoJava />
          <PiFigmaLogoThin />
        </div>
      </div>
    </section>
  );
};

export default About;
