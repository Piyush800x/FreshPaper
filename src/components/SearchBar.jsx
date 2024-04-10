import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/search.svg';
import {invoke} from '@tauri-apps/api/tauri';
import { useHistory } from 'react-router-dom';

function SearchBar() {
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
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex items-center relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={`px-3 py-2 border border-gray-300 rounded-md transition-all duration-300 ease-in-out ${
          isHovered ? 'w-56' : 'w-20'
        }`}
      />
      <button
        onClick={handleSearch}
        className="ml-2 text-white px-4 py-2 rounded-md hover: transition-all duration-300 ease-in-out"
      >
        <span className="text-lg"><img src={SearchIcon} style={{width:50, height:50}} alt='Search'></img></span>
      </button>
    </div>
  );
}

// Dummy search function for illustration
const performSearch = (searchTerm) => {
  console.log('Performing search for:', searchTerm);
  // Your search logic goes here
};

export default SearchBar;
