import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

export default function PelletDetail() {
  const { pelletName } = useParams();
  const [pellet, setPellet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState('Average');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/pellets.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch pellet data');
        return res.json();
      })
      .then((data) => {
        const found = data.find(p => p.pelletName === pelletName);
        setPellet(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [pelletName]);

  useEffect(() => {
    if (!pellet) return;
    let prices = [];
    if (selectedState === 'Average') {
      prices = pellet.averageWeeklyPrices;
    } else {
      prices = pellet.stateWisePrices[selectedState] || [];
    }
    setChartData(prices.map((price, i) => ({
      week: `Week ${i + 1}`,
      price,
      state: selectedState === 'Average' ? 'All States' : selectedState
    })));
  }, [pellet, selectedState]);

  if (loading) return <div className="text-green-700 text-center mt-10">Loading pellet details...</div>;
  if (error || !pellet) return <div className="text-red-600 text-center mt-10">Pellet not found.</div>;

  const stateOptions = ['Average', ...Object.keys(pellet.stateWisePrices)];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pelletName}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="min-h-screen w-full bg-green-50 flex justify-center items-start"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
          {/* Banner */}
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mb-6">
            <div className="bg-white rounded-xl shadow-md py-8 sm:py-10 w-full">
              <Link
                to="/dashboard"
                className="text-green-700 hover:underline text-lg font-semibold block mb-2 text-center"
              >
                ← Back to list
              </Link>
              <h1 className="text-3xl font-bold text-green-800 text-center">
                {pellet.pelletName}
              </h1>
            </div>
          </div>
          {/* Selector */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:gap-8">
            <label className="block mb-2 sm:mb-0 text-green-700 font-semibold min-w-max">
              Select State:
            </label>
            <select
              className="border border-green-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
            >
              {stateOptions.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          {/* 📈 Full-width chart outside the 1440px constraint */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1200px] h-[420px] px-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 40, left: 40, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="week"
                    scale="point"
                    angle={-30}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tickFormatter={(v) => `₹${v}`} />
                  <Tooltip
                    formatter={(value) => [`₹${value}`, 'Price']}
                    labelFormatter={(label) => label}
                    contentStyle={{ background: '#f0fdf4', borderColor: '#22c55e' }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 7 }}
                    name={selectedState === 'Average' ? 'Average Price' : `${selectedState} Price`}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
