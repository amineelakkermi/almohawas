"use client";
import React from "react";
import styles from "../style";

const infos = [
  {
    number: "01",
    title: "رؤيتنا",
    content:
      "أن نكون المرجع القانوني الأول في المملكة العربية السعودية، من خلال تقديم حلول قانونية مبتكرة ترتقي بمعايير المهنة وتحقق العدالة لعملائنا بأعلى مستويات الاحترافية والنزاهة.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "رسالتنا",
    content:
      "تمكين الأفراد والمؤسسات من حماية حقوقهم وتحقيق أهدافهم القانونية عبر فريق من المحامين المتخصصين، وتقديم استشارات قانونية شاملة ومدروسة تواكب التطورات التشريعية وتلبي تطلعات عملائنا.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "قيمنا",
    content:
      "النزاهة والشفافية في كل تعاملاتنا، والالتزام بأعلى معايير الجودة المهنية، والسرية التامة في حفظ معلومات عملائنا، والسعي الدائم نحو التميز والابتكار في الحلول القانونية.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
];

const OurInfo = () => {
  return (
    <section className="w-full py-12">
      <div className={`max-w-7xl mx-auto px-6 ${styles.marginY}`}>
        
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {infos.map((item, index) => (
            <div
              key={index}
              className="
              group  
              border border-blue/10 rounded-xl p-6
                transition-all duration-300
                hover:border-blue/30
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                
                {/* Number */}
                <span className="text-[13px] font-medium tracking-wider text-blue">
                  {item.number}
                </span>

                {/* Icon */}
                <div className={`
                 w-12 h-12 rounded-xl flex items-center justify-center
                 bg-blue text-white  transition-colors duration-500  
                `}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[20px] lg:text-[24px] font-bold text-blue text-right">
                  {item.title}
                </h3>

              </div>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-blue/20 mb-4" />

              {/* Content */}
              <p className={`${styles.paragraph} text-blue/60 leading-[1.9] text-right`}>
                {item.content}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurInfo;