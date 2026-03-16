import React from 'react'
import styles from '../style'
import Image from 'next/image'
import ScrollTop2 from './ScrollTop2'
import Title from './Title'
import Paragraph from './Paragraph'

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className={`${styles.container} ${styles.padding}`}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content side */}
          <div className="flex-1 flex flex-col gap-7 max-w-[580px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-blue/10 bg-white px-5 py-2.5 rounded-full w-fit shadow-sm">
              <div className="w-1.5 h-1.5 bg-beige rounded-full" />
              <span className="text-[14px] text-blue font-medium">من نحن</span>
            </div>

          
          {/* Titre */}
       <Title as="h1" className={`${styles.title} text-blue font-bold`}>
       نقدم لأعمالكم قيمة 
       <br />
       <span className="text-beige">حقيقية</span> وخبرة <br />
      قانونية راسخة
       </Title>



            {/* Paragraph */}
            <Paragraph className={`${styles.paragraph} text-gray-500 leading-[1.9] max-w-[500px]`}>
              شركة محاماة مهنية سعودية، نقدم حلولًا وخدمات قانونية متكاملة للكيانات التجارية ورواد الأعمال والأفراد عبر نخبة من المحامين والباحثين المتخصصين ذوي الكفاءة، وذلك وفقًا لأعلى معايير الجودة المهنية. نؤمن بالشفافية التامة مع عملائنا ونسعى دائمًا لتحقيق أفضل النتائج
            </Paragraph>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-beige" />

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full gap-2 bg-blue text-white 
                px-8 py-4 w-fit text-[15px] font-medium tracking-wide
                hover:bg-blue/90 transition-all duration-300 shadow-lg shadow-blue/20"
            >
              اكتشف المزيد
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </a>
          </div>

           {/* Image side */}
          <div className="relative flex-1 w-full flex justify-center lg:justify-start">
            {/* Decorative beige accent behind the image */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-beige/40 rounded-[12px] z-0" />

            <div className="relative z-10 w-full max-w-[500px] lg:max-w-[550px]">
              <div className="relative overflow-hidden rounded-[16px] shadow-2xl shadow-blue/10">
                <Image
                  src="/main/owner.png"
                  alt="المؤسس"
                  width={550}
                  height={700}
                  className="object-cover w-full h-[500px] lg:h-[620px]"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue/60 to-transparent" />

                {/* Name badge at bottom */}
                <div className="absolute bottom-6 right-6 left-6 flex items-center gap-4">
                  <div className="w-10 h-[2px] bg-beige" />
                  <div>
                    <p className="text-white text-[16px] font-bold">عبد العزيز علي المهوس</p>
                    <p className="text-white/60 text-[13px]">مدير المكتب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About