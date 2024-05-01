import React from 'react'
import SearchBar from '../components/SearchBar.jsx';
import HomeHero from '../components/HomeHero.jsx'
import {invoke} from '@tauri-apps/api/tauri';


const HomePage = () => {

  const getDisplays = async () => {
    let data = await invoke('get_display_info');
    console.log(`monitor: ${data}`)
  }

  getDisplays()
  return (
    <div className='block bg-pink-50 w-full' >
      {/* <div className='z-10'>
        <SetSidebar theme={'purple'}/>
      </div> */}
      <div className="flex container mx-auto p-4 justify-center items-center">
        <SearchBar theme={'purple'} />
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
