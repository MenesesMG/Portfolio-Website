import React, { useState, useRef } from "react";
import VideoLogo from "../../assets/VideoIcon.png";
import VimeoLogo from "../../assets/vimeo-icon-logo-441934AEB1-seeklogo.com.png";
import CardBackgroundVideo from "../../assets/Video & Motion Reel.mp4";

export const ProjectsCard5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundVideoRef = useRef(null);

  const toggleCardInformation = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    backgroundVideoRef.current?.play();
  };

  const handleMouseLeave = () => {
    backgroundVideoRef.current?.pause();
  };

  return (
    <div
      className="container cursor-pointer hover:scale-105 transition-all duration-500"
      onClick={toggleCardInformation}
    >
      <div
        className="card w-full md:h-[402px] h-[600px] rounded-3xl border border-gray-500 overflow-hidden relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card Video Background */}
        <div className="card-image relative flex justify-center items-center w-full h-full">
          {/* Background Video */}
          <video
            ref={backgroundVideoRef}
            src={CardBackgroundVideo}
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full group-hover:scale-125 transition-transform duration-500"
          ></video>

          {/* Foreground Image */}
          <img
            src={VideoLogo}
            alt="Foreground"
            className="relative object-cover scale-75 group-hover:scale-50 group-hover:opacity-0 transition-all duration-500"
          />
        </div>

        {/* Gradient Background (Half Height) */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Customizable Text with Fixed Position */}
        <div
          className={`absolute bottom-0 left-0 w-full p-[30px] bg-gradient-to-t from-black to-transparent opacity-0 text-white transition-all duration-500 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1 className="text-4xl font-black mb-2">VIDEO & MOTION GRAPHICS</h1>
          <p className="font-thin text-sm tracking-wide">
            MY MULTIMEDIA DESIGN PORTFOLIO
          </p>
        </div>

        {/* Show on Click */}
        <div
          className={`card-information flex flex-col md:text-base text-xs justify-center absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30 p-10 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="card-informaton-title">
            <h1 className="text-4xl font-black mb-1">VIDEO & MOTION GRAPHICS</h1>
            <p className="font-normal italic text-xs tracking-widest mb-5">
              MY MULTIMEDIA DESIGN PORTFOLIO
            </p>
          </div>
          <div className="card-description text-justify">
            <p>
              Creative videographer with over 200+ edited videos for influencers & businesses,
              boosting engagement by 5%. Proficient in Adobe Premiere & After Effects, delivering
              polished content under tight deadlines. Experienced in real-time event coverage &
              digital storytelling.
            </p>
          </div>

          <div className="card-technology-link-section flex justify-between mt-5 md:flex-row flex-col">
            <div className="card-technology text-sm">
              <p className="font-black uppercase text-start">Technologies Used</p>
              <div className="flex flex-col gap-[5px] mt-5">
                <div className="information-title-example flex gap-3">
                  <p className="font-semibold uppercase">Video Edit:</p>
                  <p className="font-light uppercase">Adobe Premiere</p>
                </div>
                <div className="information-title-example flex gap-3">
                  <p className="font-semibold uppercase">Motion Graphics:</p>
                  <p className="font-light uppercase">Adobe After Effects</p>
                </div>
              </div>
            </div>
            <div className="link flex flex-col items-end">
              <p className="font-bold uppercase md:mt-0 mt-5 text-sm">Visit Portfolio:</p>
              <div className="logo-content pt-4 flex gap-5 justify-center items-center">
                {/* Vimeo Logo with Link */}
                <a
                  href="https://vimeo.com/user179632114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <img
                    src={VimeoLogo}
                    alt="Vimeo Link"
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
