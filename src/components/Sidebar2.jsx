import React from 'react'
import logo from '../assets/big_logo.png'

const Sidebar2 = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white">
            <div className='flex justify-center bg-lime-100'>
                <img src={logo} style={{width: 64}}/>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-xl font-bold">Dev Node</h1>
            </div>
            <nav className="mt-8">
                <ul>
                <li>
                    <a
                    href="#"
                    className="flex items-center px-4 py-2  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover: duration-300 "
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="ml-3 ">Home</span>
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center px-4 py-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span className="ml-3">Wallpapers</span>
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center px-4 py-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span className="ml-3">Settings</span>
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar2
