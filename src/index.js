import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </React.StrictMode>
);

reportWebVitals();
