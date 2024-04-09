import React, { forwardRef } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";
import { Enlarge } from "../components/Enlarge";
import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoGit,
} from "react-icons/bi";
import { PiFigmaLogoThin, PiFileSqlLight } from "react-icons/pi";
import { SiCsharp } from "react-icons/si";

const About = forwardRef((props, ref) => {
  // const { ref: viewRef } = useInView();

  return (
    <section ref={ref} className="min-h-[calc(100vh-110px)] md:px-24 max-w-7xl mx-auto font-main text-primary flex-col">
      <div className="p-10">
        <div>
          <RevealFromBtm delay={0.25} duration={0.5}>
            <div className="flex">
              <h2 className="text-3xl lg:text-4xl pt-30 flex-shrink">about me</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-3 md:ml-4"></div>
            </div>
          </RevealFromBtm>
          <div className="text-sm md:text-base lg:text-lg md:flex">
            <div className="font-code font-light my-4">
              <RevealFromBtm delay={0.5} duration={1}>
                <p className="my-3">
                  My name is Nancy and I am in my fourth year of a Computer Science
                  and Commerce degree at the University of Auckland.
                </p>
              </RevealFromBtm>
              <RevealFromBtm delay={0.75} duration={1}>
                <p className="my-3">
                  I have had a passion for visual art and design since I was a kid
                  so I love all things front-end but I have also developed a passion for the more analytical side of back-end development. I enjoy dabbling with new software products and technologies, 
                  especially in the web and mobile development area.
                </p>
              </RevealFromBtm>
              <RevealFromBtm delay={1} duration={1}>
                <p className="my-3">
                  Some of my other interests include drawing, podcasts, films, trying new restaurants, running and hiking! Check out what I get up to in my free time here:
                </p>
              </RevealFromBtm>
              <RevealFromBtm delay={1.25} duration={1}>
                <ul className="ml-6">
                  <li>
                    <a href="https://www.instagram.com/nancysdrawings/" target="_blank" rel="noreferrer">🎨 <span className="hover:underline underline-offset-4 focus:underline">@nancysdrawings art account</span></a>
                  </li>
                  <li>
                    <a href="https://www.strava.com/athletes/91464495" target="_blank" rel="noreferrer">👟 <span className="hover:underline underline-offset-4 focus:underline">Strava</span></a>
                  </li>
                  <li>
                    <a href="https://www.alltrails.com/en-gb/members/nancy-wu-41" target="_blank" rel="noreferrer">⛰️ <span className="hover:underline underline-offset-4 focus:underline">AllTrails</span></a>
                  </li>
                  <li>
                    <a href="https://letterboxd.com/nancywu/" target="_blank" rel="noreferrer">🎬 <span className="hover:underline underline-offset-4 focus:underline">Letterboxd</span></a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/user/show/58478874-nancy" target="_blank" rel="noreferrer">📖 <span className="hover:underline underline-offset-4 focus:underline">Goodreads</span></a>
                  </li>
                </ul>
              </RevealFromBtm>
            </div>
          </div>
        </div>
        <div>
          <RevealFromBtm delay={1.75} duration={0.5}>
            <div className="flex pt-10 pb-4 md:pb-6">
              <h2 className="flex-shrink text-3xl lg:text-4xl">technologies</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
            </div>
          </RevealFromBtm>
          <RevealFromBtm delay={2} duration={1}>
            <div className="text-6xl md:text-7xl lg:text-8xl flex flex-wrap">
              <Enlarge scale={1.2}>
                <BiLogoJavascript />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoReact />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoHtml5 />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoCss3 />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoTailwindCss />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoPython />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoJava />
              </Enlarge>
              <Enlarge scale={1.2}>
                <SiCsharp />
              </Enlarge>
              <Enlarge scale={1.2}>
                <PiFileSqlLight />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoFirebase />
              </Enlarge>
              <Enlarge scale={1.2}>
                <BiLogoGit />
              </Enlarge>
              <Enlarge scale={1.2}>
                <PiFigmaLogoThin />
              </Enlarge>
            </div>
          </RevealFromBtm>
        </div>
      </div>
    </section>
  );
});

export default About;