import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
// import Nav from "./components/Nav";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Experience from "./pages/Experience";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Nav />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact /> */}
  </React.StrictMode>
);

reportWebVitals();
