import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div>
        <div className="fixed h-screen w-64 bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-lg font-bold">Logo</span>
        </div>
        <nav className="mt-10">
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 mt-5 hover:bg-gray-700 transition-colors duration-200">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Users
            </a>
        </nav>
        </div>
    </div>
  );
};

export default Sidebar;
