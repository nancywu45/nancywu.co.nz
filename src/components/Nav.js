import React from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GiPlainSquare } from "react-icons/gi";

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive === to ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

const Nav = ({homeRef, aboutRef, experienceRef, projectsRef, contactRef}) => {
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 110);
  }
  return (
    <div className="w-full bg-green px-10 md:px-20 lg:px-30 sticky top-0 overflow-hidden">
      <nav className="py-10 text-primary font-main text-xl flex justify-between">
        <button onClick={() => scrollToRef(homeRef)}>
          <GiPlainSquare className="text-3xl justify-start cursor-pointer" />
        </button>
        <ul className="flex items-center">
          <button
            className="px-2 hover:underline underline-offset-4 invisible md:visible active:underline"
            onClick={() => scrollToRef(aboutRef)}
          >
            about
          </button>
          <button
            className="px-2 hover:underline underline-offset-4 invisible md:visible  active:underline"
            onClick={() => scrollToRef(experienceRef)}
          >
            experience
          </button>
          <button
            className="px-2 hover:underline underline-offset-4 invisible md:visible active:underline"
            onClick={() => scrollToRef(projectsRef)}
          >
            projects
          </button>
          <button
            className="px-2 hover:underline underline-offset-4 invisible md:visible active:underline"
            onClick={() => scrollToRef(contactRef)}
          >
            contact
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
