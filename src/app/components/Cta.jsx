import React from "react";
import styles from "../style";
import Image from "next/image";
import pattern from "../../../public/main/pattern.png";
import Link from "next/link";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Cta = () => {
  return (
    <section
      id="cta"
      className={`relative overflow-hidden bg-gradient-to-b from-gray-100 to-white ${styles.padding}`}
    >
      <div
        className={`${styles.container} overflow-hidden relative flex flex-col gap-6 justify-center items-center
        bg-blue rounded-[30px] ${styles.padding}`}
      >
        {/* Pattern */}
        <div className="absolute left-0 top-0 w-full h-full flex justify-end items-start">
          <Image
            src={pattern}
            alt="pattern"
            className="object-cover rounded-[30px] opacity-10"
          />
        </div>

        {/* Content */}
        <div className="z-30 flex flex-col gap-8 items-center text-center">

          {/* Title */}
          <Title className={`${styles.title2} text-white font-bold`}>
            لنبدأ في تأمين مسارك القانوني{" "}
            <span className="text-beige">اليوم</span>
          </Title>

          {/* Paragraph */}
          <Paragraph
            className={`${styles.paragraph} text-white/70 max-w-[650px] leading-[1.9]`}
          >
            سواء كنت تدير شركة كبرى أو تبدأ مشروعك الخاص؛ نحن هنا لنضمن لك
            الاستقرار القانوني الذي يجعلك تركز فقط على ما تبرع فيه:
            <span className="text-beige font-medium"> "تطوير أعمالك"</span>.
          </Paragraph>

          {/* CTA Button */}
          <a
  href="https://wa.me/966500931122"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-4 px-6 py-3 rounded-full text-[15px] font-medium
  bg-white text-blue
  transition-all duration-300 hover:bg-beige hover:text-black shadow-lg"
>
  <span>تواصل مع خبرائنا الآن</span>

  <div
    className="w-[42px] h-[42px] bg-blue rounded-full flex items-center justify-center
    transition-all duration-300 group-hover:rotate-45"
  >
    <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
      <path
        d="M21.25 8.75H8.75M8.75 8.75V21.25M8.75 8.75L21.25 21.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</a>
        </div>
      </div>
    </section>
  );
};

export default Cta;