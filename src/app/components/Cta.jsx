import React from "react";
import styles from "../style";
import Image from "next/image";
import pattern from '../../../public/main/pattern.png'
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
       <div className="absolute -translate-x-0 -translate-y-0
       left-0 top-0
       w-full h-[100%] flex justify-end items-start">
        <Image
        src={pattern}
        alt="pattern"
        className="object-cover rounded-[30px] opacity-15"
        />


       </div>
      <div className="z-30 flex flex-col gap-8 items-center">
        {/* content */}
        <Title className={`${styles.title2} text-white  font-bold text-center`}>
         حلول <span className="text-beige">قانونية</span> تلبي احتياجات الشركات
        </Title>

        <Paragraph className={`${styles.paragraph} text-gray-400 text-center max-w-[600px]`}>
         شركة محاماة مهنية سعودية تقدم كافة الحلول القانونية للكيانات التجارية ورجال ورواد الأعمال من خلال نخبة من المحامين والباحثين أصحاب الكفاءة العالية وفقاً لأعلى معايير الجودة المهنية
        </Paragraph>

          <Link
    href="#contact"
    className="group flex items-center gap-3 text-white px-4 py-2 rounded-full text-[14px] font-medium
    bg-white/10 backdrop-blur-md border border-white/20
    transition-all duration-300 "
  >
   

    <span className="transition-transform duration-300 group-hover:translate-x-1">
     احجز الآن
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
      </div>
    </section>
  );
};

export default Cta;