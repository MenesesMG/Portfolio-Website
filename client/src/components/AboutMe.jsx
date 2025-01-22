import React from 'react';
import HeadPNG from "../assets/Head 3.png";
import HeadMobile from "../assets/Head-Mobile.png";

function AboutMe() {

  return (
    <div>
      <div className="z-10 relative grid md:grid-cols-2 grid-rows-1 overflow-visible">
        {/* Left Section for Mobile View */}
        <div className="grid3 md:z-10 h-auto w-full block md:hidden">
          <img src={HeadMobile} alt="Portrait" className="object-cover w-full h-full" />
        </div>

        {/* Text Section */}
        <div className="grid1 md:z-20 place-content-center mx-[110px] md:mt-0 -mt-[700px] md:text-start text-center relative z-20">
          <div className="drop-shadow-[0px_0px_16px_rgba(255,255,255,0.6)] animate-glow">
            <div className="card-name-description-label">
              <div className="card-name">
                <h2 className="text-4xl font-thin">I AM</h2>
                <h1 className="text-9xl md:text-[240px] font-secondary">MARCELO</h1>
              </div>
              <div className="card-description-label flex flex-col md:flex-col-reverse items-center md:items-start justify-center gap-5">
                <div className="card-label border border-gray-400 text-xs tracking-widest rounded-3xl w-[285px] h-[36px] flex flex-col justify-center items-center">
                  SELF - TAUGHT DEVELOPER
                </div>
                <p className="card-description md:-mt-[20px] drop-shadow-[0px_0px_16px_rgba(255,255,255,0.6)]">
                I’m Marcelo Meneses, a self-taught web developer and creative problem solver passionate about crafting engaging digital experiences. From web development to video creation and motion graphics, I’ve honed my skills through hands-on projects and a relentless drive to grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section for Desktop View */}
        <div className="grid2 z-20 h-auto w-full hidden md:block relative">
          <img
            src={HeadPNG}
            alt="Portrait"
            className="object-cover w-full h-full mask-gradient"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
