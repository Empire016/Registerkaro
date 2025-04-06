'use client'

import Image from 'next/image'
import React from 'react'

const logos = [
  '/logos/amd.png',
  '/logos/dell.png',
  '/logos/google.png',
  '/logos/hp.png',
  '/logos/huawei.png',
  '/logos/lee.png',
  '/logos/mcDonald.png',
  '/logos/slack.png',
  '/logos/adobe.png',
  '/logos/amazon.png',
]

const Partners = () => {
  return (
    <section className="relative bg-[#f5f7ff] py-16 overflow-hidden">
      {/* Text Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
          We <span className="text-orange-500 font-bold">partner</span> with the best,<br />
          so that your business can flow <span className="text-yellow-500 font-bold">seamlessly.</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-3">
          Your Business needs numerous expertise and that’s why we are providing you the best services with the best names in the field.
        </p>
      </div>

      {/* Fade effect left/right */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#f5f7ff] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#f5f7ff] to-transparent z-10" />

      {/* Logos Rows */}
      <div className="space-y-8 overflow-hidden">
        {/* Row 1 */}
        <div className="flex w-max animate-scroll gap-8">
          {[...logos, ...logos].map((src, i) => (
            <div key={`row1-${i}`} className="flex items-center justify-center bg-white shadow-md rounded-xl p-4 w-24 h-24">
              <Image src={src} alt="Partner Logo" width={48} height={48} className="object-contain" />
            </div>
          ))}
        </div>

        {/* Row 2 (reverse direction) */}
        <div className="flex w-max animate-scroll-reverse gap-8">
          {[...logos, ...logos].map((src, i) => (
            <div key={`row2-${i}`} className="flex items-center justify-center bg-white shadow-md rounded-xl p-4 w-24 h-24">
              <Image src={src} alt="Partner Logo" width={48} height={48} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
