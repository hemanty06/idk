import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PelletList() {
  const [pellets, setPellets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/pellets.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch pellet data');
        return res.json();
      })
      .then((data) => {
        setPellets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-green-700 text-center mt-10">Loading pellets...</div>;
  if (error) return <div className="text-red-600 text-center mt-10">{error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="min-h-screen bg-green-50 pb-10"
    >
      <header className="py-8 bg-white shadow mb-8 mt-8">
        <h1 className="text-3xl font-bold text-green-800 text-center">Biomass Pellet Market Dashboard</h1>
        <p className="text-green-700 text-center mt-2">Weekly price trends for alternative fuel sources across India</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8">
        {pellets.map((pellet, idx) => (
          <Link
            key={idx}
            to={`/${encodeURIComponent(pellet.pelletName)}`}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2">{pellet.pelletName}</h2>
            <p className="text-green-600 mb-1">Avg. Price (last week): <span className="font-bold">₹{pellet.averageWeeklyPrices[pellet.averageWeeklyPrices.length - 1]}</span></p>
            <span className="text-xs text-green-400">Click for details</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
} 