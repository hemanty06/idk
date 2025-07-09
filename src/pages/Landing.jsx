import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center bg-gradient-to-b from-green-100 to-green-50">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-4">Powering the Future with Sustainable Biomass</h1>
        <p className="text-lg sm:text-xl text-green-800 mb-8 max-w-2xl mx-auto">
          Introducing Phase 1: India's first market dashboard for alternative fuel sources made from agricultural biomass like wheat seeds and pearl millets.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow transition duration-200 text-lg mb-10"
        >
          Explore Pellet Prices
        </button>
        {/* How It Works */}
        <section className="w-full max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">How It Works</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2 text-green-700 font-bold">1</span>
              <p className="text-green-800 font-semibold mb-1">Select a Pellet</p>
              <p className="text-green-700 text-sm">Browse a variety of sustainable biomass pellets.</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2 text-green-700 font-bold">2</span>
              <p className="text-green-800 font-semibold mb-1">View Price Trends</p>
              <p className="text-green-700 text-sm">See weekly price trends and market insights.</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2 text-green-700 font-bold">3</span>
              <p className="text-green-800 font-semibold mb-1">Filter by State</p>
              <p className="text-green-700 text-sm">Compare prices across Indian states.</p>
            </div>
          </div>
        </section>
        {/* Mock Graph Preview */}
        <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col items-center mb-12">
          <div className="w-full h-48 bg-gradient-to-r from-green-200 to-green-400 rounded-lg flex items-center justify-center">
            <span className="text-green-900 text-xl font-semibold opacity-60">[Interactive Price Graph Preview]</span>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-green-900 text-green-100 py-6 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
          <div className="flex gap-6 mb-2 sm:mb-0">
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#phase2" className="hover:underline">Phase 2 Preview</a>
          </div>
          <div className="text-sm opacity-80">&copy; {new Date().getFullYear()} Biomass Market Platform</div>
        </div>
      </footer>
    </div>
  );
} 