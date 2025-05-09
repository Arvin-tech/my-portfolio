"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route for highlighting

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];


  // Close navbar when clicking outside or scrolling
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!document.getElementById("navbar-menu")?.contains(event.target as Node) && 
          !document.getElementById("navbar-button")?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleScroll() {
      setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">Arvs</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button id="navbar-button" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="navbar-menu" className="absolute top-full left-0 w-full bg-gray-800 p-4">
          <ul className="flex flex-col space-y-4">
            {/* <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li> */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === link.href ? "text-blue-400" : "hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
