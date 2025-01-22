import React from 'react'

import HeadPNG from "../../assets/react.svg";

const SkillsCard1 = () => {
  return (
    <div className='card-wrapper w-[295px] h-[450px] flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 shad'>
        <div className='card-content p-8'>
            <div className='card-title flex flex-col justify-center items-center'>
                <h1 className='text-base font-bold mb-3'>Front-End Development</h1>
                <p className='text-sm border rounded-3xl border-gray-400 w-[180px] text-center py-0.5'>Technologies Used</p>
            </div>
            <div className='card-lists my-5'>
                <ul className='list-disc list-inside'>
                    <li className='border-t border-b border-gray-800 py-2'>React</li>
                    <li className='border-t border-b border-gray-800 py-2'>Next.js</li>
                    <li className='border-t border-b border-gray-800 py-2'>TailwindCSS</li>
                    <li className='border-t border-b border-gray-800 py-2'>Bootstrap</li>
                </ul>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='bg-cyan-800 bg-opacity-55 p-5 rounded-2xl w-[80px] h-[80px] grid place-content-center'>
                    <img src={HeadPNG} alt="Portrait" className="w-[50px] h-[50px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard1
