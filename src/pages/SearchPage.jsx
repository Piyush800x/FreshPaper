import React from 'react'
import SetSidebar from '../components/SetSidebar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchItemsList from '../components/SearchItemsList.jsx';
import { CogOutline } from 'react-ionicons'
import app_bg from '../assets/app_bg.webp';

const SearchPage = () => {
  return (
    <div className='block' style={{backgroundColor: '#e3f2fd'}}>
      {/* <div className='z-10'>
            <SetSidebar/>
        </div> */}
        <div className="flex flex-row container mx-auto p-4 justify-center items-center">
            <SearchBar />
            <CogOutline/>
        </div>
        <SearchItemsList Redirect='/data'/>
    </div>
  )
}

export default SearchPage
