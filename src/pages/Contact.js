import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="min-h-screen w-screen bg-green px-10 md:px-20 lg:px-40 font-main text-primary flex-col">
      <h2 className="text-3xl pb-20">contact</h2>
      <div className="flex-col justify-center items-center">
        <h2 className="text-3xl py-30">get in touch!</h2>
        <div className="font-code pt-3 pb-10">
          <p className="font-code ">
            My inbox is open if you’d like to have a chat!
          </p>
          <p>Alternatively, check out my Github and LinkedIn profiles.</p>
        </div>
        <button className="px-10 py-3 text-2xl border-white border-2 rounded-md hover:bg-lightGreen">
          <Link to="mailto:nancywu45@gmail.com">Say Hello</Link>
        </button>
      </div>
    </section>
  );
};

export default Contact;