import React, { useState } from 'react';
import CardBackground from "../../assets/Websites/MoodMirror-Background.png";
import CardWebsite from "../../assets/Websites/MoodMirror-Website.png";
import GithubLogo from "../../assets/25231.png";
import FigmaLogo from "../../assets/figma-icon-1366x2048-tdlpz5c4.png";
import MoodMirrorLogo from "../../assets/moodmirror-alt.svg";

export const ProjectsCard1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCardInformation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='container cursor-pointer hover:scale-105 transition-all duration-500'
      onClick={toggleCardInformation}
    >
    <div className="card w-full h-[600px] md:h-[402px] rounded-3xl border border-gray-500 overflow-hidden relative group">    
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
                className="relative object-cover scale-75 group-hover:scale-50 transition-transform duration-500"
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
          <h1 className='md:text-4xl text-3xl font-black mb-2'>MOODMIRROR</h1>
          <p className='font-thin text-sm tracking-wide'>FULL STACK WEBSITE</p>
        </div>

        {/* Show on Click */}
        <div
          className={`card-information flex flex-col justify-center absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30 p-10 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className='card-informaton-title'>
            <h1 className='md:text-4xl text-3xl font-black mb-1'>MOODMIRROR</h1>
            <p className='font-normal italic text-xs tracking-widest mb-5'>FULL STACK WEBSITE</p>
          </div>
          <div className='card-description text-justify md:text-base text-xs'>
            <p>
              MoodMirror is an innovative web application designed to help users explore their emotions through facial recognition. By simply uploading an image of their face, users can receive an analysis of their emotional state. This application is built with Flask for the backend and React for the frontend, ensuring a smooth and efficient user experience.
            </p>
          </div>
          
          <div className='card-technology-link-section md:grid grid-cols-2 mt-5'>
            <div className='card-technology md:text-sm text-xs'>
              <p className='font-black uppercase text-start'>Technologies stack</p>
              <div className='md:grid grid-cols-2 gap-[5px] mt-5 flex flex-col'>
                <div className='information-title-example flex gap-3'>
                  <p className='font-semibold uppercase'>FrontEnd:</p>
                  <p className='font-light uppercase'>React Vite</p>
                </div>
                <div className='information-title-example flex gap-3'>
                  <p className='font-semibold uppercase'>BackEnd:</p>
                  <p className='font-light uppercase'>Flask</p>
                </div>
                <div className='information-title-example flex gap-3'>
                  <p className='font-semibold uppercase'>Container:</p>
                  <p className='font-light uppercase'>Docker</p>
                </div>
                <div className='information-title-example flex gap-3'>
                  <p className='font-semibold uppercase'>Deploy Tool:</p>
                  <p className='font-light uppercase'>Railway</p>
                </div>
              </div>
            </div>
                <div className='link flex flex-col items-end'>
                <p className='font-bold uppercase md:mt-0 mt-5 text-sm'>Visit Github repo & site:</p>
                <div className='logo-content pt-4 flex gap-5 justify-center items-center'>
                    {/* Github Logo with Link */}
                    <a 
                    href="https://github.com/MenesesMG/MoodMirror" 
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
                                        {/* Github Logo with Link */}
                                        <a 
                    href="https://www.figma.com/design/JnRYSQ0gcfCjcGZ52uoXJX/MoodMirror---Prototype?node-id=0-1&t=rTY2iI2oiKYJUqur-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                    >
                    <img
                        src={FigmaLogo}
                        alt="Figma Logo"
                        className="w-[38px] h-[50px] invert"
                    />
                    </a>

                    {/* Mood Mirror Logo with Link */}
                    <a 
                    href="https://moodmirror-production.up.railway.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                    >
                    <img
                        src={MoodMirrorLogo}
                        alt="Mood Mirror Logo"
                        className="w-[60px] h-[60px]"
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
