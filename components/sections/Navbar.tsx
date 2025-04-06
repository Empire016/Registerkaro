'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/tick.png" alt="RegisterKaro" width={40} height={40} />
          <span className="text-2xl font-bold text-[#0a3b77]">Register<span className="text-[#fca311]">Karo</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link href="/">Home</Link>
          <div className="relative group">
            <button className="focus:outline-none">Startup ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
              <Link href="/startup/option1" className="block px-4 py-2 hover:bg-gray-100">Option 1</Link>
              <Link href="/startup/option2" className="block px-4 py-2 hover:bg-gray-100">Option 2</Link>
            </div>
          </div>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/about">About Us</Link>
        </div>

        {/* Contact Button */}
        <a
          href="tel:+918447746183"
          className="hidden md:inline-block bg-[#fca311] text-white font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-[#e6950f]"
        >
          📞 +91 8447746183
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link href="/" onClick={toggleMenu} className="block">Home</Link>
          <Link href="/startup" onClick={toggleMenu} className="block">Startup</Link>
          <Link href="/blog" onClick={toggleMenu} className="block">Blog</Link>
          <Link href="/contact" onClick={toggleMenu} className="block">Contact Us</Link>
          <Link href="/about" onClick={toggleMenu} className="block">About Us</Link>
          <a
            href="tel:+918447746183"
            className="block bg-[#fca311] text-white text-center py-2 rounded-md font-semibold"
          >
            📞 +91 8447746183
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
