import React, { useEffect, useState } from 'react'
import SetSidebar from '../components/SetSidebar.jsx';
import app_bg from '../assets/app_bg.webp';
import ImageCard from '../components/ImageCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import HomeHero from '../components/HomeHero.jsx'

const HomePage = () => {
  return (
    <div className='block' >
      {/* <div className='z-10'>
        <SetSidebar/>
      </div> */}
      <div className="flex container mx-auto p-4 justify-center items-center">
        <SearchBar />
      </div>

      <div className='flex text-center justify-center overflow-x-auto z-0'>
        {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Wallpaper App using Rust and React
        </h1> */}
      </div>
      <div className='flex text-center justify-center items-center'>
        <HomeHero/>
      </div>
    </div>
  )
}

export default HomePage
