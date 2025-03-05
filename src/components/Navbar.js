"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      } text-white py-4 px-6 flex justify-between items-center`}
    >
      <img src="/A.png" alt="Logo" className="h-10 w-auto" />
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <span className="hover:text-gray-400 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:text-gray-400 cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <span className="hover:text-gray-400 cursor-pointer">Projects</span>
          </Link>
        </li>
       
      </ul>
    </nav>
  );
}
