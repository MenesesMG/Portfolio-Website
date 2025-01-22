import React from 'react'
import SkillsCard1 from './Cards/SkillsCard1'
import SkillsCard2 from './Cards/SkillsCard2'
import SkillsCard3 from './Cards/SkillsCard3'
import SkillsCard4 from './Cards/SkillsCard4'

const SkillsSection = () => {
  return (
    <div className='container glow-capture'>
        <div className='card flex flex-col justify-center items-center'>
            <div className="card-label border mb-[50px] border-gray-400 font-secondar tracking-[5px] rounded-3xl w-[285px] h-[46px] flex flex-col justify-center items-center">
               SKILLS
            </div>
            <div className='cards-container flex justify-center flex-wrap gap-10 '>
              <div className='hover:scale-105 duration-700 hover:cursor-pointer hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]'>
                <SkillsCard1 />
              </div>
              <div className='hover:scale-105 duration-700 hover:cursor-pointer hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]'>
                <SkillsCard2 />
              </div>
              <div className='hover:scale-105 duration-700 hover:cursor-pointer hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]'>
                <SkillsCard3 />
              </div>
              <div className='hover:scale-105 duration-700 hover:cursor-pointer hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]'>
                <SkillsCard4 />
              </div>
            </div>
        </div>
    </div>
  )
}
export default SkillsSection
