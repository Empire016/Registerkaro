'use client'

import Image from 'next/image'
import React from 'react'
import { FaUserTie, FaUsers, FaChartLine } from 'react-icons/fa'

const WhatWeDo = () => {
  return (
    <section className="relative bg-[#f4f6fe] py-20 px-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-sm text-orange-500 font-bold tracking-widest uppercase">What We Do</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
          Receive support at every stage of{' '}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            business development.
          </span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Launch, grow, and scale with ease. Your dedicated team answers all queries within 24 hours,
          ensuring professional and helpful support throughout your journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Popular Services
          </button>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full font-semibold hover:shadow transition">
            Get Started →
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-20">
        {/* Left - stacked images */}
        <div className="relative flex flex-col gap-6 z-10">
          <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">
            <Image src="/img/img2.webp" alt="Teamwork" fill className="object-cover" />
          </div>
          <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">
            <Image src="/img/img3.webp" alt="Discussion" fill className="object-cover" />
          </div>
        </div>

        {/* Center - glass card */}
        <div className="flex items-center justify-center z-20">
          <div className="backdrop-blur-md bg-white/60 p-8 rounded-2xl shadow-lg text-center max-w-xs w-full border border-white/40 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800 mb-2">1000+ Clients</h3>
            <p className="text-sm text-gray-600">Trusted by businesses across the globe</p>
          </div>
        </div>

        {/* Right - portrait */}
        <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-xl z-10 hover:scale-105 transition">
          <Image src="/img/img1.webp" alt="Consultant" fill className="object-cover" />
        </div>
      </div>

      {/* Business stages */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full">
          {[
            {
              icon: <FaUserTie />,
              label: 'Sole Trader',
              color: 'from-blue-800 to-blue-600',
            },
            {
              icon: <FaUsers />,
              label: 'Limited Company',
              color: 'from-orange-500 to-yellow-400',
            },
            {
              icon: <FaChartLine />,
              label: 'Growing Business',
              color: 'from-indigo-800 to-indigo-600',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-72 sm:w-64 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white text-3xl mb-4 shadow-md`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                We assist {item.label.toLowerCase()}s with tailored solutions and expert guidance to help you thrive.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
