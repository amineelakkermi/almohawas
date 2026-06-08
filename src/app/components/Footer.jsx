import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "لماذا تختارنا", href: "#why-us" },
  { label: "تواصل معنا", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-blue text-white relative overflow-hidden rounded-t-[20px]">

      {/* Main */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Logo + short text */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <Image
              src="/main/logo1.png"
              alt="المهوس"
              width={220}
              height={140}
              className="object-contain filter brightness-0 invert"
            />

           
            <p className="text-white/50 text-[14px] max-w-[280px] text-center lg:text-right">
              نضع خبرتنا القانونية لخدمتكم، ونرافقكم بثقة في كل خطوة.
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-col lg:flex-row items-center gap-5 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white text-[14px] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white transition">
              {/* Instagram */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              </svg>
            </a>

            <a href="#" className="text-white/50 hover:text-white transition">
              {/* X */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
              </svg>
            </a>

            <a href="#" className="text-white/50 hover:text-white transition">
              {/* LinkedIn */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.2 4.65-2.2 5 0 5.9 3.3 5.9 7.6V24h-5v-7.9c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 pt-4 border-t border-white/10 text-center lg:text-right gap-4">

          {/* Address */}
          <p className="text-white/40 text-[13px] leading-[28px]">
            المملكة العربية السعودية <br />
            القصيم ، بريدة ، طريق ابو بكر الصديق
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-[13px]">
            {new Date().getFullYear()} المهوس. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;