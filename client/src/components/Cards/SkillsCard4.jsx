import React from 'react'
import Figma from "../../assets/figma-icon-1366x2048-tdlpz5c4.png";

const SkillsCard4 = () => {
  return (
    <div className='card-wrapper w-[295px] h-[450px] flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 shadow-xl'>
        <div className='card-content p-8'>
            <div className='card-title flex flex-col justify-center items-center'>
                <h1 className='text-base font-bold mb-3'>Design & Motion Graphics</h1>
                <p className='text-sm border rounded-3xl border-gray-400 w-[180px] text-center py-0.5'>Technologies Used</p>
            </div>
            <div className='card-lists my-5'>
                <ul className='list-disc list-inside'>
                    <li className='border-t border-b border-gray-800 py-2'>Figma</li>
                    <li className='border-t border-b border-gray-800 py-2'>Adobe Premiere</li>
                    <li className='border-t border-b border-gray-800 py-2'>Adobe After Effects</li>
                    <li className='border-t border-b border-gray-800 py-2'>Adobe Photoshop</li>
                </ul>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='bg-cyan-800 bg-opacity-55 p-5 rounded-2xl w-[80px] h-[85px] grid place-content-center'>
                    <img src={Figma} alt="Portrait" className="w-[50px] h-[55px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard4
