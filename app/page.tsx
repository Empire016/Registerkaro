'use client'

import dynamic from 'next/dynamic'
import Navbar from "@/components/sections/Navbar";
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OurServices from '@/components/sections/OurServices';
import BusinessPackages from '@/components/sections/BusinessPackages';
import Whyus from '@/components/sections/Whyus';
import Partners from '@/components/sections/Partners';

const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false })

export default function Home() {
  return (
    <div className="text-slate-100">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <BusinessPackages />
      <Whyus />
      <Partners />
    </div>
  )
}
