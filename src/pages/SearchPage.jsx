import React from 'react'
import SetSidebar from '../components/SetSidebar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchItemsList from '../components/SearchItemsList.jsx';
import { CogOutline } from 'react-ionicons'
import app_bg from '../assets/app_bg.webp';

const SearchPage = () => {
  return (
    <div className='block w-full' style={{backgroundColor: '#e3f2fd'}}>
        <div className='z-10'>
          <SetSidebar theme={'blue'}/>
        </div>
        <div className="flex flex-row container mx-auto p-4 justify-center items-center">
            <SearchBar theme={'blue'} />
        </div>
        <SearchItemsList Redirect='/data'/>
        <div className='bg-blue-200'></div>
        <div className='bg-blue-100'></div>
        <div className='bg-blue-500'></div>
        <div className='bg-purple-200'></div>
        <div className='bg-purple-100'></div>
        <div className='bg-purple-500'></div>
    </div>
  )
}

export default SearchPage
