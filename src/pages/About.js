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
import nancy from "../assets/Nancy.JPG";

const About = () => {
  return (
    <section className="min-h-screen bg-green px-10 md:px-20 lg:px-40 font-main text-primary">
      <div className="md:flex">
        <div>
          <h2 className="text-3xl">about me</h2>
          <div className="font-code">
            <p>
              My name is Nancy and I am in my third year of a Computer Science
              and Commerce degree at the University of Auckland.
            </p>
            <p>
              I have had a passion for visual art and design since I was a kid,
              so naturally my passion in software leans toward front-end
              development. I have picked up an interest in self-teaching web
              development, with a desire to extend into mobile development in
              the near future.
            </p>
            <p>
              Some of my other interests include graphic design, finance and
              tech podcasts, trying new restaurants, and running.
            </p>
          </div>
        </div>
        <img
          src={nancy}
          alt="nancy"
          className="rounded-full object-cover w-20 h-20"
        />
      </div>
      <div>
        <h2 className="text-3xl pt-10">skills</h2>
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
