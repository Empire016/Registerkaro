'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-32 md:pt-40 pb-16">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
       
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            We take care of <span className="text-[#fca311]">ALL</span> your business compliance needs
          </h1>
          <h2 className="text-4xl font-bold text-[#0a3b77]">Register<span className="text-[#fca311]">Karo</span></h2>
          <p className="text-gray-600 text-base md:text-lg">
            An online business compliance platform that helps entrepreneurs and other individuals with registrations, tax filings, and more.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-3 bg-[#fca311] text-white rounded-lg font-semibold hover:bg-[#e6950f] transition"
          >
            Get Started
          </Link>
        </div>

        {/* Right Side Image and Stats */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative mx-auto md:mx-0 w-[300px] md:w-[400px] aspect-[3/4] bg-[#fca311] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/girl.png" // You can rename the file to match this
              alt="RegisterKaro Expert"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Stats */}
          <div className="absolute top-6 right-6 bg-white shadow-md px-4 py-2 rounded-lg text-center text-sm">
            <div className="text-lg font-bold text-[#0a3b77]">500+</div>
            <div className="text-gray-600">Businesses Every Month</div>
          </div>
          <div className="absolute top-1/3 -left-10 -translate-y-1/ bg-white shadow-md px-4 py-2 rounded-lg text-center text-sm">
            <div className="text-lg font-bold text-[#0a3b77]">20,000+</div>
            <div className="text-gray-600">Clients in India</div>
          </div>
          <div className="absolute bottom-6 right-9 bg-white shadow-md px-4 py-2 rounded-lg text-center text-sm">
            <div className="text-lg font-bold text-[#0a3b77]">250+</div>
            <div className="text-gray-600">Professionals Network</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
