import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const SocialMedia = () => {
  return (
    <div className="text-primary text-3xl fixed bottom-0 px-10 md:px-20 lg:px-30 pb-10 text-4xl flex-col gap-3">
      <Link to="https://github.com/nancywu45" target="_blank">
        <AiFillGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/nancywu45/" target="_blank">
        <BiLogoLinkedinSquare />
      </Link>
    </div>
  );
};

export default SocialMedia;
