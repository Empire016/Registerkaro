'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, Square } from 'lucide-react'

const services = [
  { name: 'Monthly GST fillings', price: 10000 },
  { name: 'Quarterly TDS fillings', price: 5000 },
  { name: 'Board Minutes preparation', price: 1000 },
  { name: 'Annual AOC 4 filling', price: 2000 },
  { name: 'Annual MGT - 7 filling', price: 2000 },
]

const Whyus = () => {
  const [checked, setChecked] = useState([true, true])

  const handleToggle = (index: number) => {
    setChecked(prev => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  const total = services.reduce((sum, s, i) => sum + (checked[i] ? s.price : 0), 0)

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-medium mb-4 text-gray-700">
            With other service providers you would have to pay for each compliance filing individually!
          </h3>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className={`flex items-center justify-between border p-4 rounded-xl cursor-pointer transition hover:shadow-md ${
                  checked[index] ? 'bg-orange-50 border-orange-400' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {checked[index] ? (
                    <CheckSquare className="text-orange-500" />
                  ) : (
                    <Square className="text-gray-400" />
                  )}
                  <span className="text-sm font-medium text-gray-700">{service.name}</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Rs.{service.price.toLocaleString()}</div>
              </div>
            ))}
          </div>

          <motion.div
            className="absolute top-8 right-[-32px] bg-yellow-400 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            {Math.round(total / 1000)}k
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label className="inline-flex items-center gap-2 mb-4 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm font-medium text-gray-800">Use RegisterKaro</span>
          </label>

          <p className="text-gray-600 text-sm mt-2 mb-4">
            Get all your Compliance done with the help of Industry Experts and channelize that precious time to grow your business.
          </p>

          <button className="bg-[#fca311] hover:bg-[#ffb733] text-white px-5 py-2 rounded-full font-medium shadow-md transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Whyus
