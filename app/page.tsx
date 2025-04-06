'use client'

import dynamic from 'next/dynamic'
import Navbar from "@/components/sections/Navbar";
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OurServices from '@/components/sections/OurServices';
import BusinessPackages from '@/components/sections/BusinessPackages';

const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false })

export default function Home() {
  return (
    <div className="text-slate-100">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <BusinessPackages />
    </div>
  )
}
