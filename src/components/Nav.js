import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GiPlainSquare } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="bg-green px-10 md:px-20 lg:px-30 sticky top-0">
      <nav className="py-10 text-primary font-main text-xl flex justify-between">
        <Link to="/">
          <GiPlainSquare className="text-3xl justify-start cursor-pointer" />
        </Link>
        <ul className="flex items-center">
          <CustomLink
            className="px-2 hover:underline underline-offset-4 active:underline"
            to="./about"
          >
            about
          </CustomLink>
          <CustomLink
            className="px-2 hover:underline underline-offset-4 active:underline"
            to="./experience"
          >
            experience
          </CustomLink>
          <CustomLink
            className="px-2 hover:underline underline-offset-4 active:underline"
            to="./projects"
          >
            projects
          </CustomLink>
          <CustomLink
            className="px-2 hover:underline underline-offset-4 active:underline"
            to="./contact"
          >
            contact
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
