"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!document.getElementById("navbar-menu")?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">Arvs</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          ☰
        </button>
      </div>

      {isOpen && (
        <div id="navbar-menu" className="absolute top-full left-0 w-full bg-gray-800 p-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
