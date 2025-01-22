import { useState } from "react";

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="text-base fixed top-0 z-50 bg-gray-500 bg-clip-padding 
    backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 bg-blend-overlay w-full">
      <div className="p-[40px] md:p-[60px] md:pl-[100px] md:pr-[130px] flex justify-between flex-col md:flex-row">
        <div className="flex justify-between items-center">
          <div className="header-logo">
            <a className="hover:text-gray-300 duration-500 font-bold">MY PORTFOLIO</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden bg-transparent p-0" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            <svg className="h-6 w-6 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <nav id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:gap-[20px] gap-[25px] md:mt-0 mt-[15px] hover:cursor-pointer md:text-start text-center">
            <li><a className="hover:text-gray-300 duration-500 bg-transparent border-none" onClick={() => scrollToSection('about')}>ABOUT</a></li>
            <li><a className="hover:text-gray-300 duration-500 bg-transparent border-none" onClick={() => scrollToSection('skills')}>SKILLS</a></li>
            <li><a className="hover:text-gray-300 duration-500 bg-transparent border-none" onClick={() => scrollToSection('projects')}>PROJECTS</a></li>
            <li><a className="hover:text-gray-300 duration-500 bg-transparent border-none" onClick={() => scrollToSection('contact')}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
