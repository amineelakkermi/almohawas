"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "لماذا تختارنا", href: "#why-us" },

];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
    <nav
    className={`sticky top-0 right-0 left-0 z-[999] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    w-full py-4`}
    >
        <div className={`transition-all duration-700 ${scrolled ? "max-w-5xl" : "max-w-7xl"} mx-auto px-6 flex items-center justify-between`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/main/logo1.png"
              alt="المهوس"
              width={220}
              height={150}
              className="object-cover filter brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center bg-white/10 backdrop-blur-sm
          shadow-lg
          py-5 px-10 rounded-full gap-16">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-[16px] font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-3 right-0 w-0 h-[3px] bg-white/10 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

         {/* CTA Button */}
         <div className="hidden lg:block">
         <Link
    href="#cta"
    className="group flex items-center gap-3 text-white px-4 py-2 rounded-full text-[14px] font-medium
    bg-white/10 backdrop-blur-md border border-white/20
    transition-all duration-300 hover:bg-white hover:text-black"
  >
   

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      تواصل معنا
    </span>
     <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center
    transition-transform duration-300 group-hover:rotate-45">
      
      <svg
        width="22"
        height="22"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.25 8.75H8.75M8.75 8.75V21.25M8.75 8.75L21.25 21.25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[60] flex flex-col items-center justify-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                menuOpen ? "rotate-45 absolute" : "mb-[5px]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : "mb-[5px]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                menuOpen ? "-rotate-45 absolute" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Glassmorphism background */}
        <div
          className={`absolute inset-0 bg-blue/80 backdrop-blur-2xl transition-all duration-700 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu Content */}
        <div
          ref={menuRef}
          className={`relative z-10 flex flex-col justify-center items-center h-full px-8 transition-all duration-700 delay-100 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
       

          {/* Nav Links */}
          <ul className="flex flex-col items-center gap-1 w-full">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`w-full transition-all duration-500 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${150 + index * 80}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-white text-[28px] font-semibold py-4 transition-all duration-300 hover:tracking-wider"
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="w-16 h-[1px] bg-white/15 mx-auto" />
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button in menu */}
          <div
            className={`mt-10 transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
          >
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block border-2 border-white text-white px-10 py-3.5 rounded-full text-[17px] font-medium transition-all duration-300 hover:bg-white hover:text-blue"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/20 rounded-full transition-all duration-700 ${
              menuOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: menuOpen ? "600ms" : "0ms" }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;