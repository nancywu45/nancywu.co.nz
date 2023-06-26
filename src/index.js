import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./tailwind.css";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    {/* <Experience />
    <Work />
    <Contact /> */}
  </React.StrictMode>
);

reportWebVitals();
