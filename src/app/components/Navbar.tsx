"use client"; // This ensures the navbar can use useState

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Arvs
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <div className={`absolute top-14 left-0 w-full bg-gray-800 md:static md:w-auto md:flex space-x-6 p-4 md:p-0 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/" className="block md:inline hover:text-green-300">Home</Link>
          <Link href="/about" className="block md:inline hover:text-green-300">About</Link>
          <Link href="/projects" className="block md:inline hover:text-green-300">Projects</Link>
          <Link href="/blog" className="block md:inline hover:text-green-300">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
