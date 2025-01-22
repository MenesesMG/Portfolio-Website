import React from 'react'
import Docker from "../../assets/97_Docker_logo_logos-512.webp";

const SkillsCard3 = () => {
  return (
    <div className='card-wrapper w-[295px] h-[450px] flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 shadow-xl'>
        <div className='card-content p-8'>
            <div className='card-title flex flex-col justify-center items-center'>
                <h1 className='text-base font-bold mb-3'>Development Tools</h1>
                <p className='text-sm border rounded-3xl border-gray-400 w-[180px] text-center py-0.5'>Technologies Used</p>
            </div>
            <div className='card-lists my-5'>
                <ul className='list-disc list-inside'>
                    <li className='border-t border-b border-gray-800 py-2'>Git</li>
                    <li className='border-t border-b border-gray-800 py-2'>Docker</li>
                    <li className='border-t border-b border-gray-800 py-2'>Postman</li>
                    <li className='border-t border-b border-gray-800 py-2'>Ngix</li>
                </ul>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='bg-cyan-800 bg-opacity-55 p-5 rounded-2xl w-[80px] h-[80px] grid place-content-center'>
                    <img src={Docker} alt="Portrait" className="w-[56px] h-[50px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard3
