import React from 'react'
import Django from "../../assets/django-icon-1606x2048-lwmw1z73.png";

const SkillsCard2 = () => {
  return (
    <div className='card-wrapper w-[295px] h-[450px] flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 shadow-xl'>
        <div className='card-content p-8'>
            <div className='card-title flex flex-col justify-center items-center'>
                <h1 className='text-base font-bold mb-3 text-center'>Back-End Development & Frameworks</h1>
                <p className='text-sm border rounded-3xl border-gray-400 w-[180px] text-center py-0.5'>Technologies Used</p>
            </div>
            <div className='card-lists my-5'>
                <ul className='list-disc list-inside'>
                    <li className='border-t border-b border-gray-800 py-2'>Flask</li>
                    <li className='border-t border-b border-gray-800 py-2'>Django</li>
                    <li className='border-t border-b border-gray-800 py-2'>Python</li>
                    <li className='border-t border-b border-gray-800 py-2'>Java</li>
                </ul>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='bg-green-900 bg-opacity-55 p-5 rounded-2xl w-[80px] h-[80px] grid place-content-center'>
                    <img src={Django} alt="Portrait" className="w-[50px] h-[50px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard2
