'use client'

import React from 'react'
import Image from 'next/image'

const services = [
  { icon: '/assets/company-formation.svg', title: 'Company Formation' },
  { icon: '/assets/secretarial.svg', title: 'Company Secretarial Services' },
  { icon: '/assets/virtual-office.svg', title: 'Virtual Office Address' },
  { icon: '/assets/annual-compliance.svg', title: 'Annual Compliance Services' },
  { icon: '/assets/vat.svg', title: 'VAT Registration, Preparation & Filing' },
  { icon: '/assets/payroll.svg', title: 'Payroll Services' },
  { icon: '/assets/bookkeeping.svg', title: 'Bookkeeping Services' },
  { icon: '/assets/webinars.svg', title: 'Live Online Webinars & Workshops' },
]

const OurServices = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f8a829] mb-12 relative inline-block">
          <span className="relative z-10">OUR SERVICES</span>
          <span className="absolute left-1/2 bottom-0 w-12 h-3 bg-[#d47e14] -z-10 -translate-x-1/2 rounded-full" />
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-200 hover:shadow-lg hover:-translate-y-3 active:scale-95"
            >
              <div className="w-20 h-20 relative mb-4 group transition-all duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(252,163,17,0.6)] transition-all duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-gray-600">
          Our Client Services Team is always happy to talk to you about what is best for your needs.
          <br />
          Contact our team to find out if we are the right fit for you.
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#fca311] hover:underline font-medium"
          >
            Explore our services
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurServices
