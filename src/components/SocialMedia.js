import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const SocialMedia = () => {
  return (
    <div className="text-primary fixed bottom-0 pl-10 md:pl-20 lg:pl-30 pb-10 text-4xl flex-col">
      <Link to="https://github.com/nancywu45" target="_blank">
        <AiFillGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/nancywu45/" target="_blank">
        <BiLogoLinkedinSquare />
      </Link>
      {/* vertical line */}
      {/* <div className="border-2"></div> */}
    </div>
  );
};

export default SocialMedia;
