import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../style";

const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "لماذا تختارنا", href: "#why-us" },
  { label: "تواصل معنا", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white relative overflow-hidden rounded-t-[20px]">
    


      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Section — Logo + Links + Social + Copyright */}
      <div className="max-w-7xl mx-auto  py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <Image
              src="/main/logo1.png"
              alt="المحواس"
              width={240}
              height={150}
              className="object-contain  filter brightness-0 invert"
            />

            <p className={`font-normal text-center lg:text-right mr-6 text-[15px] lg:text-[15px] leading-[30.8px] text-gray-300 max-w-[300px]`}>
         شركة محاماة سعودية تقدم خدمات وحلولًا قانونية متكاملة للشركات ورواد الأعمال والأفراد  
            </p>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-col lg:flex-row items-center gap-6 flex-wrap justify-center">
            <li className="flex lg:hidden text-white/60 hover:text-white text-[16px] transition-colors duration-300">
              العناوين
            </li>
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

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.3 8.3 0 0 0 4.76 1.5V6.8a4.83 4.83 0 0 1-1-.11z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label="X"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-6 pt-4 border-t border-white/5 text-center lg:text-right">
          <p className="text-white/40 text-[13px] leading-[32px] mr-6">
            المملكة العربية السعودية
            <br />
            القسيم , البريدعة , طريق علي بن أبي طالب
          </p>
         
          <p className="text-white/40 text-[13px]">
            {new Date().getFullYear()} المحواس. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;