import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <section className="min-h-screen w-screen bg-green px-10 md:px-20 lg:px-40 font-main text-primary">
      <h2 className="text-3xl">portfolio projects</h2>
      <ProjectCards />
    </section>
  );
};

export default Projects;
