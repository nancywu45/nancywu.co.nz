import React, { useRef, useEffect, useState, forwardRef } from "react";
import { useInView } from 'react-intersection-observer'; 
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

const About = forwardRef((props, ref) => {
  const { ref: viewRef, inView: myElementIsVisible } = useInView();

  return (
    <section ref={ref} className="min-h-[calc(100vh-110px)] w-full bg-green px-12 md:px-24 lg:px-40 font-main text-primary flex-col">
      <div className="p-12">
        <div>
          <div className="relative flex">
            <h2 className="text-3xl pt-30 flex-shrink">about me</h2>
            <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
          </div>
          <div className="md:flex">
            <div className="font-code my-4">
              <p  ref={viewRef} className="my-3">
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
            <img src={nancy} alt="nancy" className="w-52 ml-8 py-5 object-contain" />
          </div>
        </div>
        <div>
          <div className="relative flex pt-10 pb-3">
            <h2 className="flex-shrink text-3xl">technologies</h2>
            <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
          </div>
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
      </div>
    </section>
  );
});

export default About;