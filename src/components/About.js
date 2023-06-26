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
import nancy from "../images/Nancy.JPG";

const About = () => {
  return (
    <section className="min-h-screen bg-green px-10 md:px-20 lg:px-40 font-main text-primary">
      <div className="md:flex">
        <div>
          <h2 className="text-3xl">about me</h2>
          <p className="font-code">
            [insert about me text to be changed later]
          </p>
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
