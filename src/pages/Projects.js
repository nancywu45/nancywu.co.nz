import React, { forwardRef } from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-[calc(100vh-100px)] w-full bg-green px-10 md:px-20 lg:px-40 font-main text-primary">
      <div className="p-12">
        <h2 className="text-3xl">portfolio projects</h2>
        <hr></hr>
        <ProjectCards />
      </div>
    </section>
  );
});

export default Projects;
