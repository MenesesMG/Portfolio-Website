import React from 'react'
import { ProjectsCard1 } from './Cards/ProjectsCard1'
import { ProjectsCard2 } from './Cards/ProjectsCard2'
import { ProjectsCard3 } from './Cards/ProjectsCard3'
import { ProjectsCard4 } from './Cards/ProjectsCard4'
import { ProjectsCard5 } from './Cards/ProjectsCard5'
import VideoLogo from "../assets/icons/VideoIcon.png"
import MotionGraphics from "../assets/icons/MotionGraphicsIcon.png"
import FrontEndIcon from "../assets/icons/FrontEndIcon.png"

const ProjectsSections = () => {
  return (
    <div className='container'>
        <div className='card flex flex-col justify-center items-center'>

            <div className='card-titles text-center my-[10px] mb-[60px]'>
                <h1 className='font-bold tracking-tighter md:text-9xl text-8xl'>PROJECTS</h1>
                <p className='font-thin'>From Concept to Completion: A Glimpse into My Work</p>
            </div>

            <div className='flex flex-col justify-center w-3/4'>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4">
                    <div className="col-span-1 md:col-span-3"><ProjectsCard1 /></div>
                    <div className="col-span-1 md:row-span-2 md:row-start-2"><ProjectsCard2 /></div>
                    <div className="col-span-1 md:col-span-2 md:row-start-2"><ProjectsCard3 /></div>
                    <div className="col-span-1 md:col-span-2 md:col-start-2 md:row-start-3"><ProjectsCard4 /></div>
                    <div className="col-span-1 md:col-span-5 md:row-start-4"><ProjectsCard5 /></div>
                </div>

                <div className='options grid grid-cols-2 gap-6 place-content-center mt-5'>
                <a className='hover:text-gray-100' href='https://drive.google.com/drive/folders/1yn1ssg1ia2zy-SQCQSOeFtnRpwhIF9ZV?usp=sharing' target="_blank">
                    <div className='border border-gray-600 rounded-xl p-5 hover:cursor-pointer hover:scale-105 duration-500 hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]'>
                        <div className='card-image flex flex-col justify-center items-center'>
                            <img src={VideoLogo} alt="Icon" className="object-contain w-[100px] h-[100px] mb-5" />
                        </div>
                        <div className='text-center md:text-start'>
                            <h1 className='text-lg font-bold uppercase'>VIDEO & MOTION PROJECTS</h1>
                            <p className='uppercase tracking-widest text-sm'>view more</p>
                        </div>
                    </div>
                </a>
                    <a href='https://www.frontendmentor.io/profile/MenesesMG' className='no-underline' target="_blank">
                        <div className='border border-gray-600 rounded-xl p-5 hover:text-gray-100 hover:cursor-pointer hover:scale-105 duration-500 hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]'>
                            <div className='card-image flex flex-col justify-center items-center'>
                                <img src={MotionGraphics} alt="Icon" className="object-contain w-[100px] h-[100px] mb-5" />
                            </div>
                            <div className='text-center md:text-start'>
                                <h1 className='text-lg font-bold uppercase'>Front end Progress</h1>
                            <   p className='uppercase tracking-widest text-sm'>view more</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSections
