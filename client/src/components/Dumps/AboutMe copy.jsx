import React from 'react';
import HeadPNG from "../assets/Head 2.png";
import HeadMobile from "../assets/Head-Mobile.png";
import Gradient from "../assets/Gradient-Large.png";

function AboutMe() {
  return (
    <div className='w-full md:mt-48 md:grid md:grid-cols-2'>
      <div className='grid1'>
      <div className='card-portrait z-30 -mb-[400px] md:hidden'>
        <img src={HeadMobile} alt="Portrait" className='w-full h-full object-cover' />
      </div>
      
      <div className='card flex flex-col z-20 md:justify-center relative md:mx-[150px]'>
        <div className='card-name-description-label text-center md:text-start'>
          <div className='card-name'>
            <h2 className='text-4xl font-thin lg:'>I AM</h2>
            <h1 className='text-9xl font-secondary'>MARCELO</h1>
          </div>
          <div className='card-description-label flex flex-col md:flex-col-reverse justify-center items-center gap-4 md:-mt-[20px] md:items-start'>
            <div className='card-label border border-gray-400 text-xs tracking-widest rounded-3xl w-[285px] h-[36px] flex flex-col justify-center items-center'>
              SELF - TAUGHT DEVELOPER
            </div>
            <p className='card-description px-[50px] md:px-0 '>
              I’m Marcelo Meneses, a self-taught web developer and creative problem solver passionate about crafting engaging digital experiences. From web development to video creation and motion graphics, I’ve honed my skills through hands-on projects and a relentless drive to grow.
            </p>
          </div>
        </div>
      </div>

      </div>

      <div className='grid2'>
        <img src={HeadPNG} alt="Portrait" className='hidden md:block z-0 h-full w-auto right-0  absolute bottom-0 top-20 md:translate-x-[10%] object-contain' />
      </div>
    </div>

  );
}

export default AboutMe;
