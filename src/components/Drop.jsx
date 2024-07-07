import axios from 'axios';
import React, { useState } from 'react';


export default function Drop({id}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchvideo= async () =>{
    const res = await axios.delete(`https://6685bb30b3f57b06dd4da302.mockapi.io/test/${id}`);
    setIsOpen(false);
  }

  return (
    
    <div className=" relative inline-block text-left">
      <button
        onClick={toggle}
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
        type="button"
      >
        <img className='w-4 h-4' src="https://img.icons8.com/?size=100&id=36944&format=png" alt="" />
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                onClick={fetchvideo}
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
