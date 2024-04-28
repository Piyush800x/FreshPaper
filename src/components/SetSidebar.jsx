import React, { useState } from 'react';
import Sidebar2 from './Sidebar2.jsx';
import HomeIcon from '../assets/home_icon.svg'

const Sidebar = ({theme}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-0  bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 h-screen w-20  text-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar2 theme={theme}/>
      </div>

      <div className="transition-all ease-in-out delay-50 fixed top-4 left-4 z-50 hover:translate-y-1 hover:scale-110">
        <a href='/'>
          <button
            className={`p-2 bg-${theme}-200 text-white rounded-xl focus:outline-none`}
          >
            <img className='p-1' src={HomeIcon} style={{width:35, height:35}} alt='Search'></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;