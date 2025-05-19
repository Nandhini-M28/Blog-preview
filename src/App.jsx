import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

const LearningCard = () => {
  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full overflow-hidden border border-black">
        {/* Image section */}
        <div className="h-48 bg-yellow-300 flex items-center justify-center">
          {/* Placeholder SVG image */}
          <svg
            className="w-24 h-24"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="10" width="80" height="80" fill="#000" />
            <path d="M20,20 L80,80" stroke="#FFF" strokeWidth="4" />
            <path d="M80,20 L20,80" stroke="#FFF" strokeWidth="4" />
          </svg>
        </div>

        {/* Text section */}
        <div className="p-5">
          <span className="bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded">
            Learning
          </span>
          <p className="text-gray-600 text-sm mt-2">Published 21 Dec 2023</p>
          <h2 className="text-xl font-semibold mt-2">
            HTML & CSS foundations
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>

          {/* Author */}
          <div className="flex items-center mt-4">
            <img
              src="https://i.pravatar.cc/30?img=5"
              alt="Author"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p className="text-sm font-semibold text-gray-800">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;

