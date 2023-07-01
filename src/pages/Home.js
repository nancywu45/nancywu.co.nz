import "../tailwind.css";

import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Home() {
  return (
    <section className="min-h-screen bg-green px-10 md:px-20 lg:px-40">
      <div className="font-main text-primary p-10">
        <h2 className="text-2xl">Hello!</h2>
        <h1 className="italic">
          <span className="text-xl m-auto align-middle">I'm </span>
          <span className="text-5xl font-semibold align-middle">Nancy Wu</span>
        </h1>
        <p className="font-code py-8 max-w-xl">
          I’m a penultimate year Computer Science and Commerce student at the
          University of Auckland passionate about front-end development and the
          interconnection between business and technology.
        </p>
        <button>Find out more!</button>
        <div className="text-3xl">
          <a href="https://github.com/nancywu45" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/nancywu45/" target="_blank">
            <BiLogoLinkedinSquare />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
