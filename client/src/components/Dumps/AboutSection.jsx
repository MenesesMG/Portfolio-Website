import React from 'react';
import HeadPNG from "../assets/Head 2.png";
import Gradient from "../assets/Gradient-Large.png";

const AboutSection = () => {
  return (
    <div className="container w-full">
      <div
        className="card grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center"

      >
        {/* Name Section */}
        <div className="card-name text-center md:text-left md:self-end">
          <div className="name-start text-4xl">I AM</div>
          <div className="name-header font-secondary text-9xl">MARCELO</div>
        </div>

        {/* Portrait Section */}
        <div className="card-portrait flex justify-center md:-mt-[150px] -mt-[250px] -mb-[300px] md:row-span-2">
          <img src={HeadPNG} alt="Portrait" />
        </div>

        {/* Description Section */}
        <div className="card-description-label flex flex-col md:flex-col-reverse items-center self-start md:items-start justify-start gap-5">
          <div className="description text-base text-center md:text-left">
            I’m Marcelo Meneses, a self-taught web developer and creative problem solver passionate about crafting engaging digital experiences. From web development to video creation and motion graphics, I’ve honed my skills through hands-on projects and a relentless drive to grow.
          </div>
          <div className="label flex items-center justify-center w-[285px] h-[36px] text-base border border-gray-300 rounded-3xl">
            SELF - TAUGHT DEVELOPER
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
