import React, { useState } from 'react';


const CustomDropDown = ({ options, initialValue, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleChange = (event) => {
    const selectedIndex = options.indexOf(event.target.value);
    setSelectedOption(event.target.value);
    onSelect(selectedIndex);
  };


  return (
    <div className="relative inline-block text-left" key={selectedOption}>
      <div className="relative">
        <span className="block text-gray-700">{selectedOption}</span>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
