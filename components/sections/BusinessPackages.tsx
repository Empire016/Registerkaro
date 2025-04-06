'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const packages = [
  {
    title: 'Small business & Startup Accounts',
    description: 'Make sure your business meets its statutory requirements.',
    employees: '0 - 10',
  },
  {
    title: 'Growing Business Package',
    description: 'Additional support to help you reach your business goals.',
    employees: '11 - 50',
  },
  {
    title: 'Scale-Up Company Offer',
    description: 'Compliance, reporting & analysis of performance.',
    employees: '50 +',
  },
  {
    title: 'Setting up a business',
    description: 'Make sure your business meets its statutory requirements.',
    highlight: 'Company Formation Services',
  },
]

const BusinessPackages = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1d4d72] to-[#124260] py-20 px-6 text-white overflow-hidden">
      {/* Floating Laptop Man Overlay */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-10 md:-bottom-6 md:-left-20 w-[160px] md:w-[240px] z-10 pointer-events-none"
      >
        <Image
          src="/assets/laptop.png"
          alt="Laptop Man"
          width={300}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Cards Grid */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-[#fca311] transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>

            {item.employees && (
              <div className="text-sm font-medium text-gray-900">
                Number of employees <br />
                <span className="font-bold">{item.employees}</span>
              </div>
            )}

            {item.highlight && (
              <div className="mt-2 text-sm">
                <span className="font-bold">{item.highlight}</span>
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <ArrowRight className="text-[#fca311]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BusinessPackages
