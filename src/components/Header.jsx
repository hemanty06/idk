import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <img src="/vite.svg" alt="Company Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-green-800">Biomass Co.</span>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 font-semibold transition">Home</Link>
        <button className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 font-semibold transition"><Link to="/about">About</Link></button>
        <button className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 font-semibold transition"><Link to="/contact">Contact</Link></button>
      </div>
    </header>
  );
} 