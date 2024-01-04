import React, { forwardRef, useState } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";

const Experience = forwardRef((props, ref) => {

  const work = [
    {
      id: 'Deloitte',
      company: 'Deloitte Australia',
      role: 'Data & AI Consulting Vacationer',
      startDate: 'Nov 2023',
      endDate: 'Dec 2023',
      bullet1: 'Worked in an agile team of 6 to develop a generative AI chatbot for the client using Azure OpenAI Service, React.js, and Typescript',
      bullet2: 'Drafted client documentation for a First Time User Walkthrough for the application',
    },
    {
      id: 'PwC',
      company: 'PwC New Zealand',
      role: 'Corporate Treasury Intern',
      startDate: 'Nov 2022',
      endDate: 'Present',
      bullet1: 'Contributed to development of Treasury Intelligence, an SQL and PowerBI-based SaaS to help clients monitor hedging and risks',
      bullet2: 'Assisted with commentary on FX and interest rate markets for clients'
    },
    {
      id: '2degrees',
      company: '2degrees',
      role: 'Retail Assistant',
      startDate: 'Nov 2021',
      endDate: 'Oct 2022',
      bullet1: 'Upselling tech products and mobile/broadband plans with long-term financing options to read monthly store KPI targets',
      bullet2: 'Reached more than $8,000 daily sales in peak periods',
    }
  ]

  const extracurricular = [
    {
      id: 'DEVS',
      company: 'Developers Society',
      role: 'Sponsorship Manager',
      startDate: 'Nov 2022',
      endDate: 'Present',
      bullet1: 'Largest student run tech club in NZ aiming to bridge the gap between academia and industry, consisting of ~300 members',
      bullet2: 'Actively reached out to firms to form sponsorship relationships and maintained existing partnerships',
    },
    {
      id: 'UAIC',
      company: 'University of Auckland Investment Club',
      role: 'Co-President',
      startDate: 'Oct 2022',
      endDate: 'Dec 2023',
      bullet1: 'Co-leading a team of 23 to provide a 30+ event schedule for members, consisting of educational workshops, competitions, mentoring programmes, and networking opportunities centred around finance and investing',
      bullet2: 'Increased club membership numbers by 67% to ~450 in 2023',
    },
    {
      id: 'UoA Case',
      company: 'University of Auckland Case Programme',
      role: 'Member',
      startDate: 'Sep 2022',
      endDate: 'Present',
      bullet1: 'Working in teams to analyse a business case and formulate strategies and implementation recommendations before presenting to a panel of judges',
      bullet2: 'Eligible to represent the university in national and international case competitions',
    }
  ]

  const [workToggle, setWorkToggle] = useState('Deloitte')
  const [expToggle, setExpToggle] = useState('DEVS')

  return (
    <section ref={ref} id="experience" className="min-h-[calc(100vh-100px)] md:px-24 max-w-7xl mx-auto font-main text-primary">
      <div className="p-10">
        <RevealFromBtm delay={0.25} duration={0.5}>
          <div className="flex">
              <h2 className="flex-shrink text-3xl lg:text-4xl">experience</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
          </div>
        </RevealFromBtm>
        <RevealFromBtm delay={0.5} duration={1}>
          <h3 className="text-2xl lg:text-3xl mt-4 mb-2 md:my-4">work</h3>
          <div className="font-code font-light md:flex">
            <div className="pb-2 md:pb-0 flex flex-wrap md:flex-col">
              {
                work.map(({id}) => {
                  return(
                    <div>
                      <button 
                        className={`border-b-2 md:border-b-0 md:border-l-2 ${workToggle === id ? 'border-grey text-grey bg-midGreen' : 'border-lightGreen text-lightGreen'} px-4 py-2 md:py-4 w-28 text-center md:text-left`}
                        onClick={() => setWorkToggle(id)}
                      >
                        {id}
                      </button>
                    </div>
                  )
                })
              }
            </div>
            <div>
              {
                work.map((work) => {
                  return(
                    <>
                      {workToggle === work.id ? (
                      <div className="md:ml-6 lg:ml-10">
                        <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{work.company} · {work.role} </p>
                        <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{work.startDate} — {work.endDate}</p>
                        <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
                          <li className="my-2">
                            {work.bullet1}
                          </li>
                          <li className="my-2">
                            {work.bullet2}
                          </li>
                        </ul>
                      </div>) : null}
                    </>
                    
                  )
                })
              }
            </div>
          </div>
        </RevealFromBtm>
        <RevealFromBtm delay={1} duration={1}>
          <h3 className="text-2xl lg:text-3xl mt-4 mb-2 md:my-4">extracurricular</h3>
          <div className="font-code font-light md:flex">
            <div className="pb-2 md:pb-0 flex flex-wrap md:flex-col ">
              {
                extracurricular.map(({id}) => {
                  return(
                    <div>
                      <button 
                        className={`border-b-2 md:border-b-0 md:border-l-2  ${expToggle === id ? 'border-grey text-grey bg-midGreen' : 'border-lightGreen text-lightGreen'} px-4 py-2 md:py-4 w-28 text-center md:text-left`}
                        onClick={() => setExpToggle(id)}
                      >
                        {id}
                      </button>
                    </div>
                  )
                })
              }
            </div>
            <div>
              {
                extracurricular.map((extracurricular) => {
                  return(
                    <>
                      {expToggle === extracurricular.id ? (
                      <div className="md:ml-6 lg:ml-10">
                        <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{extracurricular.company} · {extracurricular.role} </p>
                        <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{extracurricular.startDate} — {extracurricular.endDate}</p>
                        <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
                          <li className="my-2">
                            {extracurricular.bullet1}
                          </li>
                          <li className="my-2">
                            {extracurricular.bullet2}
                          </li>
                        </ul>
                      </div>) : null}
                    </>
                  )
                })
              }
            </div>
          </div>
        </RevealFromBtm>
      </div>
    </section>
  );
});

export default Experience;
