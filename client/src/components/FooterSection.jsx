import React from 'react'
import ProfileImage from "../assets/Icons/Meneses-Icon.jpg";
import GithubLogo from "../assets/25231.png";
import LinkedInLogo from "../assets/linkedin-app-white-icon.webp";
import VimeoLogo from "../assets/vimeo-white-icon.webp";

export const FooterSection = () => {
  return (
    <footer className="md:w-screen flex flex-col items-center justify-between bg-gray-500 bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 bg-blend-overlay">
      <div className='content p-[50px] flex-grow '>
        <div className='label-content flex flex-col justify-center items-center'>
          <div className="card-label border mb-[50px] border-gray-400 font-secondar tracking-[5px] rounded-3xl w-[285px] h-[46px] flex flex-col justify-center items-center">
            CONTACT
          </div>
          <p className='w-3/4 text-center'>Have a project in mind or just want to say hello? I’d love to hear from you! Feel free to reach out through any of the methods below.</p>
        </div>
        <div className='contact-details mt-[60px] flex md:justify-between md:flex-row flex-col items-center gap-10'>
          <div className='contact-me flex items-center gap-10'>
            <div className='contact-image w-[100px] h-[100px] rounded-full overflow-hidden'>
              <img src={ProfileImage} alt="Icon" className="object-cover" />
            </div>
            <div className='contact-name uppercase'>
              <h1 className='text-lg font-bold'>Marcelo Meneses</h1>
              <p>FRONT END DEVELOPER</p>
            </div>
          </div>
          <div className='contant-links flex gap-5'>
            <a href='https://github.com/MenesesMG' className='hover:text-gray-100 hover:cursor-pointer hover:scale-105 duration-500 hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]' target='_blank'>
              <div className='Github'>
                <div className='w-fit flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 '>
                  <img src={GithubLogo} alt="Icon" className="invert object-cover w-[50px] h-auto m-5" />
                </div>
              </div>              
            </a>
            <a href='https://linkedin.com/in/marcelo-greg-meneses-003750245' className='hover:text-gray-100 hover:cursor-pointer hover:scale-105 duration-500 hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]' target='_blank'>
              <div className='LinkedIn'>
                <div className='w-fit flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 '>
                  <img src={LinkedInLogo} alt="Icon" className="object-cover w-[50px] h-auto m-5" />
                </div>
            </div>
            </a>
            <a href='https://vimeo.com/user179632114' className='hover:text-gray-100 hover:cursor-pointer hover:scale-105 duration-500 hover:shadow-[0px_0px_95px_0px_rgba(199,255,233,0.4)]' target='_blank'>
              <div className='Vimeo'>
                <div className='w-fit flex flex-col items-center justify-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 '>
                  <img src={VimeoLogo} alt="Icon" className="object-cover w-[50px] h-auto m-5" />
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}
