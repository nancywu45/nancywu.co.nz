import React from "react";

const Experience = () => {
  return (
    <section className="min-h-screen w-screen bg-green px-10 md:px-20 lg:px-40 font-main text-primary">
      <h2 className="text-3xl">experience</h2>
      <h3 className="text-2xl my-4">work</h3>
      <div className="font-code">
        <p className="my-1">PwC · Corporate Treasury Intern </p>
        <p className="my-1 text-grey">Nov 2022 — Present</p>
        <ul className="my-1 list-disc">
          <li>
            Contributed to development of Treasury Intelligence, an SQL and
            PowerBI-based SaaS to help clients monitor hedging and risks
          </li>
          <li>
            Assisted with commentary on FX and interest rate markets for clients
          </li>
        </ul>
      </div>
      <h3 className="text-2xl my-4">extracurricular</h3>
      <div className="font-code">
        <p className="my-1">
          University of Auckland Investment Club · Co-President
        </p>
        <p className="my-1 text-grey">Oct 2022 — Present</p>
        <ul className="my-1 list-disc">
          <li>
            Co-leading a team of 23 to provide educational workshops,
            competitions, mentoring programmes, and networking opportunities
            centred around finance and investing
          </li>
          <li>
            Introduced a student podcast to strengthen the connection between
            UAIC and alumni
          </li>
        </ul>
      </div>
      <div className="font-code mt-5">
        <p className="my-1">Developers Society · Treasurer</p>
        <p className="my-1 text-grey">Nov 2022 — Present</p>
        <ul className="my-1 list-disc">
          <li>
            Largest student run tech club in NZ aiming to bridge the gap between
            academia and industry
          </li>
          <li>
            Communicating with firms for sponsorship contracts and managed the
            yearly budget for EOY financial statements
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
