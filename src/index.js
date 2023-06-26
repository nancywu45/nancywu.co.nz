import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <About />
    <Experience />
    <Work />
    <Contact />
  </React.StrictMode>
);

reportWebVitals();
