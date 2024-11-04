import React, { useState } from 'react';

function Select({ options, placeholder, onSelectChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectChange(value); // Envía el valor al componente padre
  };

  return (
    <div className="relative w-64 ml-[10px] mr-[10px]">
      <select
        className="block appearance-none w-full bg-pink-600 text-white font-semibold border border-pink-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-pink-700"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.5 7.5l4.5 4.5 4.5-4.5h-9z" />
        </svg>
      </div>
    </div>
  );
}

export default Select;
