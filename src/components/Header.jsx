import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white shadow flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 gap-2 sm:gap-0">
      <div className="flex items-center gap-3">
        <img src="/vite.svg" alt="Company Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-green-800">Biomass Co.</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto items-center justify-center sm:justify-end mt-2 sm:mt-0">
        <Link to="/" className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 font-semibold transition w-full sm:w-auto text-center">Home</Link>
        <Link to="/about" className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 font-semibold transition w-full sm:w-auto text-center">About</Link>
        <Link to="/contact" className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 font-semibold transition w-full sm:w-auto text-center">Contact</Link>
      </div>
    </header>
  );
} 