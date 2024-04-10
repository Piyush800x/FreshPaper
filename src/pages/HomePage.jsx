import React, { useEffect, useState } from 'react'
import SetSidebar from '../components/SetSidebar.jsx';
import app_bg from '../assets/app_bg.webp';
import ImageCard from '../components/ImageCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const HomePage = () => {
  return (
    <div className='block' style={{backgroundImage: `url(${app_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',}}>
      <div className='z-10'>
        <SetSidebar/>
      </div>
      <div className="flex container mx-auto p-4 justify-center">
        <SearchBar />
      </div>

      <div className='flex flex-wrap justify-center overflow-x-auto z-0'>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
      </div>
    </div>
  )
}

export default HomePage
