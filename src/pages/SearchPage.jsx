import React from 'react'
import SetSidebar from '../components/SetSidebar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchItemsList from '../components/SearchItemsList.jsx';


const SearchPage = () => {
  return (
    <div>
      <div className='z-10'>
            <SetSidebar/>
        </div>
        <div className="flex container mx-auto p-4 justify-center">
            <SearchBar />
        </div>
        <SearchItemsList Redirect='/data'/>
    </div>
  )
}

export default SearchPage
