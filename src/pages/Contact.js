import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-[calc(100vh-100px)] w-full bg-green px-12 md:px-24 lg:px-40 font-main text-primary flex-col">
      <div className="p-12">
        <div className="relative flex">
            <h2 className="flex-shrink text-3xl">contact</h2>
            <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
        </div>
        <div className="flex-col text-center pt-20">
          <h2 className="text-3xl py-30">get in touch!</h2>
          <div className="font-code pt-3 pb-10">
            <p className="font-code">
              My inbox is open if you’d like to have a chat or feel free to reach out on my Github and LinkedIn profiles.</p>
          </div>
          <button className="px-10 py-3 text-2xl border-white border-2 rounded-md hover:bg-lightGreen">
            <Link to="mailto:nancywu45@gmail.com">Say Hello</Link>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Contact;
