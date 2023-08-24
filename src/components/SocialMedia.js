import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const SocialMedia = () => {
  return (
    <div className="text-primary fixed bottom-0 pl-10 md:pl-20 lg:pl-30 text-4xl flex-col">
      <div className="relative flex flex-col">
        <Link className="flex shrink" to="https://github.com/nancywu45" target="_blank">
          <AiFillGithub className="my-2"/>
        </Link>
        <Link className="flex shrink" to="https://www.linkedin.com/in/nancywu45/" target="_blank">
          <BiLogoLinkedinSquare/>
        </Link>
        <div className="flex-grow border-l border-grey my-2 ml-4 h-40"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
