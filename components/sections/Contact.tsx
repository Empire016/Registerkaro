'use client'

import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="bg-[#f7f9fc] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-orange-500">Contact</span> Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 bg-white bg-opacity-80 backdrop-blur-xl rounded-xl shadow-2xl p-10">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: 'Main Office',
                content: 'Safe Ledger Private Limited\n#101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli,\nBengaluru, Karnataka 560008',
              },
              {
                icon: <FaPhoneAlt />,
                title: 'Make a Call',
                content: '+91 84477 46183',
              },
              {
                icon: <FaClock />,
                title: 'Working Hours',
                content: 'Mon–Fri: 9:00 – 06:00\nSat–Sun: Holiday',
              },
              {
                icon: <FaEnvelope />,
                title: 'Send an Email',
                content: 'support@registerkaro.in\nadmin@registerkaro.in',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="text-white bg-orange-500 p-3 rounded-full shadow-md text-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">{item.title}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            {[
              { name: 'name', placeholder: 'Your Name', type: 'text' },
              { name: 'email', placeholder: 'Your Email', type: 'email' },
              { name: 'phone', placeholder: 'Your Phone Number', type: 'tel' },
            ].map((field, idx) => (
              <input
                key={idx}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="w-full px-5 py-3 rounded-md border border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100 transition"
              />
            ))}
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 rounded-md border border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-6 rounded-md shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
