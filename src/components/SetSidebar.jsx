import React, { useState } from 'react';
import Sidebar2 from './Sidebar2.jsx';
import { CogOutline } from 'react-ionicons'

const Sidebar = () => {
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
        className={`fixed top-0 left-0 h-screen w-64  text-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar2/>
      </div>

      <div className="fixed top-4 left-4 z-50">
        <button
          className="p-2 text-white rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
        <CogOutline />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;