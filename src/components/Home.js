import "../tailwind.css";
import { GiPlainSquare } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Home() {
  return (
    <section className="min-h-screen bg-green px-10">
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
      <div className="font-main text-primary p-10">
        <h2 className="text-2xl">Hello!</h2>
        <h1 className="italic">
          <span className="text-xl m-auto align-middle">I'm </span>
          <span className="text-5xl font-semibold align-middle">Nancy Wu</span>
        </h1>
        <p className="font-code py-8">
          I’m a penultimate year Computer Science and Commerce student at the
          University of Auckland. Learn more about my experience and passion
          projects below!
        </p>
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
