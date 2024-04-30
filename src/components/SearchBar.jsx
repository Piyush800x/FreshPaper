import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/search.svg';
import {invoke} from '@tauri-apps/api/tauri';
import { useHistory } from 'react-router-dom';

function SearchBar({theme}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // Working fine, but only researching not working > SearchPage
  const handleSearch = async () => {
    console.log("UPDATE CALLED");
    history.push('/data', { searchTerm });
    console.log(`SearchTerm: ${searchTerm}`)
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className="flex items-center relative font-opensans"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`bg-${theme}-200 px-1 py-1 rounded-xl`}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          className={`px-3 py-2 border border-gray-300 rounded-xl transition-all duration-300 ease-in-out ${
            isHovered ? 'w-56' : 'w-20'
          }`}
        />
      </div>
      <div className={`ml-2 bg-${theme}-200 rounded-xl justify-center items-center`}>
        <button
          onClick={handleSearch}
          className={`text-white px-2 py-2 rounded-xl hover: transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-${theme}-500`}
        >
          <span className="text-lg"><img src={SearchIcon} style={{width:35, height:35}} alt='Search'></img></span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
