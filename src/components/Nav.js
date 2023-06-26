import React from "react";
import { GiPlainSquare } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="bg-green px-10 md:px-20 lg:px-40">
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
    </div>
  );
};

export default Nav;
