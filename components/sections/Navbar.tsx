'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/tick.png" alt="RegisterKaro" width={40} height={40} />
          <span className="text-2xl font-bold text-[#0a3b77]">
            Register<span className="text-[#fca311]">Karo</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-[#fca311]">Home</Link>
          <div className="relative group">
            <button className="focus:outline-none hover:text-[#fca311]">Startup ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-40">
              <Link href="/startup/option1" className="block px-4 py-2 hover:bg-gray-100">Option 1</Link>
              <Link href="/startup/option2" className="block px-4 py-2 hover:bg-gray-100">Option 2</Link>
            </div>
          </div>
          <Link href="/blog" className="hover:text-[#fca311]">Blog</Link>
          <Link href="/contact" className="hover:text-[#fca311]">Contact Us</Link>
          <Link href="/about" className="hover:text-[#fca311]">About Us</Link>
        </div>

        {/* Desktop Call Button */}
        <a
          href="tel:+918447746183"
          className="hidden md:inline-block bg-[#fca311] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#e6950f]"
        >
          📞 +91 8447746183
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-5 text-base font-medium text-gray-800 shadow-md">
          <Link href="/" onClick={toggleMenu} className="block hover:text-[#fca311]">🏠 Home</Link>
          <Link href="/startup" onClick={toggleMenu} className="block hover:text-[#fca311]">🚀 Startup</Link>
          <Link href="/blog" onClick={toggleMenu} className="block hover:text-[#fca311]">📰 Blog</Link>
          <Link href="/contact" onClick={toggleMenu} className="block hover:text-[#fca311]">📞 Contact Us</Link>
          <Link href="/about" onClick={toggleMenu} className="block hover:text-[#fca311]">ℹ️ About Us</Link>
          <a
            href="tel:+918447746183"
            className="block bg-[#fca311] text-white text-center py-3 rounded-md font-semibold hover:bg-[#e6950f]"
          >
            📲 +91 8447746183
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
