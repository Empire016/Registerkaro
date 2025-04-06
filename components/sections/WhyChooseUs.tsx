'use client'

import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f9faff] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          {/* Expert Image */}
          <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px]">
            <Image
              src="/assets/man.png"
              alt="Expert"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Phone Mockup */}
          <div className="absolute -bottom-10 left-0 w-[100px] h-[200px] md:w-[100%] md:h-[240px]">
            <Image
              src="/assets/mobile.png"
              alt="Phone Mockup"
              fill
              className="object-contain"
            />
          </div>

          {/* Stats Box with Wiggle Animation */}
          <div className="absolute bottom-2 right-0 bg-white shadow-md p-4 rounded-xl text-center w-[180px] animate-[wiggle_1.5s_ease-in-out_infinite]">
            <div className="text-sm font-bold text-gray-800">100+ Ratings</div>
            <div className="text-xs text-gray-500">Trusted by 20,000+ clients</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fca311]">WHY CHOOSE US</h2>
          <p className="text-gray-700">
            Our all-in-one platform and team of experts will help direct you in the right path and
            ensure that your business starts the right way in record time.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              'Affordable',
              'Compliance Ensured',
              'Simplified Process',
              'On-time Service',
              'Instant Response',
              'Industry Experts',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-sm rounded-lg flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-[#fca311]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
