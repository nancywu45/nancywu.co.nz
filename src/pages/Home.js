import "../tailwind.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-green px-10 md:px-20 lg:px-40 flex w-screen items-center">
      <div className="font-main text-primary p-12">
        <h2 className="text-2xl text-primary font-main">Hello! I'm</h2>
        <h1>
          <span className="text-6xl font-semibold align-middle text-primary font-main">
            Nancy Wu.
          </span>
        </h1>
        <p className="font-code pt-8 pb-14 max-w-xl text-grey">
          I’m a penultimate year Computer Science and Commerce student at the
          University of Auckland passionate about front-end development and the
          interconnection between business and technology.
        </p>
        <button className="px-10 py-3 text-2xl border-white border-2 rounded-md hover:bg-lightGreen">
          <Link to="./about">Find out more!</Link>
        </button>
      </div>
    </section>
  );
}

export default Home;
