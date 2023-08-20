import React, { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="experience" className="min-h-[calc(100vh-100px)] w-full bg-green px-10 md:px-20 lg:px-40 font-main text-primary">
      <div className="p-12">
        <h2 className="text-3xl">experience</h2>
        <h3 className="text-2xl my-4">work</h3>
        <div className="font-code">
          <p className="my-1">PwC · Corporate Treasury Intern </p>
          <p className="my-1 text-grey">Nov 2022 — Present</p>
          <ul className="my-1 ml-6 list-disc">
            <li>
              Contributed to development of Treasury Intelligence, an SQL and
              PowerBI-based SaaS to help clients monitor hedging and risks
            </li>
            <li>
              Assisted with commentary on FX and interest rate markets for clients
            </li>
          </ul>
        </div>
        <div className="font-code mt-5">
          <p className="my-1">2degrees · Retail Assistant </p>
          <p className="my-1 text-grey">Nov 2021 — Oct 2022</p>
          <ul className="my-1 ml-6 list-disc">
            <li>
              Upselling tech products and mobile/broadband plans with long-term financing options to read monthly store KPI targets, including more than $8,000 daily sales in peak periods
            </li>
          </ul>
        </div>
        <h3 className="text-2xl my-4">extracurricular</h3>
        <div className="font-code">
          <p className="my-1">
            University of Auckland Investment Club · Co-President
          </p>
          <p className="my-1 text-grey">Oct 2022 — Present</p>
          <ul className="my-1 ml-6 list-disc">
            <li>
              Co-leading a team of 23 to provide educational workshops,
              competitions, mentoring programmes, and networking opportunities
              centred around finance and investing
            </li>
            <li>
              Increased club membership numbers by 67% to ~450 in 2023
            </li>
          </ul>
        </div>
        <div className="font-code mt-5">
          <p className="my-1">Developers Society · Treasurer</p>
          <p className="my-1 text-grey">Nov 2022 — Present</p>
          <ul className="my-1 ml-6 list-disc">
            <li>
              Largest student run tech club in NZ aiming to bridge the gap between
              academia and industry, consisting of ~300 members
            </li>
            <li>
              Communicating with firms for sponsorship contracts and managed the
              yearly budget for EOY financial statements
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Experience;
