"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Brimstone Media"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link href="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-600 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-indigo-600 transition">
              Services
            </Link>

            {/* Get in Touch Button */}
            <Link href="/contact">
              <button className="ml-4 rounded-md bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-500 transition">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>

            {/* Get in Touch Mobile */}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="w-full rounded-md bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-500 transition">
                Get in Touch
              </button>
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}></Link>
          </div>
        </div>
      )}
    </nav>
  )
}
