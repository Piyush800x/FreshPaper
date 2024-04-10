import React, { useState } from 'react';

const AnimatedSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsActive(true);
  };

  const handleInputBlur = () => {
    if (searchTerm.trim() === '') {
      setIsActive(false);
    }
  };


  return (
    <div className="relative justify-center">
      <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
          isActive ? 'animate-input-active' : ''}`}>
      </div>
      <input
        type="text"
        className={`form-input py-2 pl-10 pr-4 rounded-md transition-all duration-300 ${
          isActive ? 'bg-white shadow-md' : 'bg-gray-200'
        }`}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button class="bg-lime-100 hover:transition duration-50 ease-in-out ...">Search</button>
    </div>
  );
};

export default AnimatedSearchInput;