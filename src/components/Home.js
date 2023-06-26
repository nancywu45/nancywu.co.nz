import "../tailwind.css";
import { GiPlainSquare } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Home() {
  return (
    <div className="min-h-screen bg-green px-10">
      <nav className="py-10 text-primary font-main text-xl flex justify-between">
        <a href="#">
          <GiPlainSquare className="text-3xl justify-start cursor-pointer" />
        </a>
        <ul className="flex items-center">
          <li className="px-2">
            <a href="#">about</a>
          </li>
          <li className="px-2">
            <a href="#">experience</a>
          </li>
          <li className="px-2">
            <a href="#">work</a>
          </li>
          <li className="px-2">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
      <div className="font-main text-primary m-auto">
        <h2 className="text-2xl">Hello!</h2>
        <h1 className="italic">
          <span className="items-center">I'm </span>
          <span className="text-5xl font-semibold">Nancy Wu</span>
        </h1>
        <p className="font-code">
          I’m a penultimate year Computer Science and Commerce student at the
          University of Auckland. Learn more about my experience and passion
          projects below!
        </p>
        <a href="https://github.com/nancywu45">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/nancywu45/">
          <BiLogoLinkedinSquare />
        </a>
      </div>
    </div>
  );
}

export default Home;
