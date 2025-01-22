import React, { useState } from 'react';
import CardBackground from "../../assets/Websites/Dashboard-Background.jpg";
import CardWebsite from "../../assets/Websites/Dashboard-Website.png";
import GithubLogo from "../../assets/25231.png";
import MoodMirrorLogo from "../../assets/moodmirror-alt.svg";

export const ProjectsCard2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCardInformation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='container cursor-pointer hover:scale-105 transition-all duration-500'
      onClick={toggleCardInformation}
    >
    <div className="card w-full md:h-[820px] h-[600px] rounded-3xl border border-gray-500 overflow-hidden relative group">    
        {/* Card Image */}
        <div className="card-image relative flex justify-center items-center w-full h-full object-cover">
            {/* Background Image */}
            <img
                src={CardBackground}
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full group-hover:scale-125 transition-transform duration-500"
            />
            
            {/* Foreground Image */}
            <img
                src={CardWebsite}
                alt="Foreground"
                className="relative object-cover scale-100 group-hover:scale-75 transition-transform duration-500"
            />
        </div>


        {/* Gradient Background (Half Height) */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Customizable Text with Fixed Position */}
        <div
          className={`absolute bottom-0 left-0 w-full p-[30px] bg-gradient-to-t from-black to-transparent opacity-0  text-white transition-all duration-500 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1 className='text-3xl font-black mb-2'>DASHBOARD</h1>
          <p className='font-thin text-sm tracking-wide'>FRONT-END WEBSITE</p>
        </div>

        {/* Show on Click */}
        <div
          className={`card-information flex flex-col justify-center absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30 p-10 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className='card-informaton-title'>
            <h1 className='text-3xl font-black mb-1'>DASHBOARD</h1>
            <p className='font-normal italic text-xs tracking-widest mb-5'>FRONT-END WEBSITE</p>
          </div>
          <div className='card-description text-justify text-sm'>
            <p>
            Dashboard is a mock web application developed as a submission for an OJT or Development Internship exam. It leverages the Reqres API to manage a list of users, offering functionalities like viewing, searching, editing, and deleting user data. The application is built with React and Next.js, and styled using Bootstrap 5. The interface design was crafted in Figma.
            </p>
          </div>
          
          <div className='card-technology-link-section flex flex-col'>
            <div className='card-technology'>
              <div className='mt-5 mb-5 md:text-base text-xs'>
                <div className='information-title-example flex gap-3'>
                  <p className='font-semibold uppercase'>FrontEnd:</p>
                  <p className='font-light uppercase'>Bootstrap React</p>
                </div>
                <div className='information-title-example flex gap-3 mt-5'>
                  <p className='font-semibold uppercase'>BackEnd:</p>
                  <p className='font-light uppercase'>REQRES API</p>
                </div>
              </div>
            </div>
                <div className='link flex flex-col items-end'>
                <p className='font-bold uppercase md:mt-0 mt-5 text-sm'>Visit Github repo & site:</p>
                <div className='logo-content pt-4 flex gap-5 justify-center items-center'>
                    {/* Github Logo with Link */}
                    <a 
                    href="https://github.com/MenesesMG/Dashboard-Project" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                    >
                    <img
                        src={GithubLogo}
                        alt="Github Logo"
                        className="w-[50px] h-[50px] invert"
                    />
                    </a>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
