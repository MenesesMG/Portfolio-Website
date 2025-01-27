import React, { useState } from 'react';
import CardBackground from "../../assets/Websites/Shopee-Background.png";
import CardWebsite from "../../assets/Websites/Shopee-Website.png";
import GithubLogo from "../../assets/25231.png";
import CanvaLogo from "../../assets/dfb96cc174513093cd6ed61489ccb750.svg";

export const ProjectsCard4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCardInformation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='container cursor-pointer hover:scale-105 transition-all duration-500'
      onClick={toggleCardInformation}
    >
    <div className="card w-full md:h-[400px] h-[600px] rounded-3xl border border-gray-500 overflow-hidden relative group">    
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
          <h1 className='text-4xl font-black mb-2'>SHOPEE UI MOCK REDESIGN</h1>
          <p className='font-thin text-sm tracking-wide'>UI UX DESIGN PROJECTT</p>
        </div>

        {/* Show on Click */}
        <div
          className={`card-information flex flex-col justify-center absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30 p-10 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className='card-informaton-title'>
            <h1 className='text-4xl font-black mb-1'>SHOPEE UI MOCK REDESIGN</h1>
            <p className='font-normal italic text-xs tracking-widest mb-5'>UI UX DESIGN PROJECT</p>
          </div>
          <div className='card-description text-justify'>
            <p>
            This project focuses on creating a more user-friendly interface for Shopee using Adobe XD, enhancing usability and ease of navigation to provide a seamless shopping experience.            </p>
          </div>
          
          <div className='card-technology-link-section md:grid grid-cols-2 mt-5'>
            <div className='card-technology text-sm'>
              <p className='font-black uppercase text-start'>Technologies stack</p>
              <div className='grid grid-cols-2 gap-[5px] mt-3'>
                <div className='information-title-example flex gap-3'>
                  <p className='font-semibold uppercase'>FrontEnd:</p>
                  <p className='font-light uppercase'>AdobeXD</p>
                </div>
              </div>
            </div>
                <div className='link flex flex-col items-end'>
                <p className='font-bold uppercase md:mt-0 mt-5 text-sm'>Visit Design:</p>
                <div className='logo-content pt-4 flex gap-5 justify-center items-center'>
                    {/* Github Logo with Link */}
                    <a 
                    href="https://www.canva.com/design/DAFUC2X7vAA/C8E0tDqnpsi4cNOHJnox0g/view?utm_content=DAFUC2X7vAA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h000455da45" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                    >
                    <img
                        src={CanvaLogo}
                        alt="Github Logo"
                        className="w-[50px] h-[50px]"
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
