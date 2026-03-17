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
    <footer className="bg-blue text-white relative overflow-hidden rounded-t-[20px]">
    


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

            <p className={`font-normal text-center lg:text-right mr-0 lg:mr-6 text-[15px] lg:text-[15px] leading-[30.8px] text-gray-300 max-w-[300px]`}>
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
             {/* LinkedIn */}
            <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/50 hover:text-white transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.2 4.65-2.2 5 0 5.9 3.3 5.9 7.6V24h-5v-7.9c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/>
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