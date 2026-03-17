'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import Paragraph from './Paragraph'
import Title from './Title'

const servicesData = [
  {
    title: 'التمثيل والتقاضي',
    content:
      'الترافع في القضايا التجارية والعقارية والعمالية والإدارية واللجان شبه القضائية، تقديم الاعتراضات بطلب الاستئناف والنقض والتماس إعادة النظر.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    ),
  },
  {
    title: 'الاستشارات القانونية',
    content:
      'تقديم حلول قانونية مبتكرة وفعّالة لمعالجة مختلف التحديات القانونية والاحتراز من مخاطرها.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    title: 'الشركات والامتياز التجاري Franchise',
    content:
      'تأسيس الشركات وحوكمتها وتحويلها وصياغة قرارات تعديل عقودها، وزيادة وتخفيض رأس المال وتحديد صلاحيات الإدارة التنفيذية ومجالس الإدارات، تأسيس صناديق الاستثمار.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    title: 'أعمال التوثيق',
    content:
      'توثيق التصرفات العقارية، توثيق قيمة المال المنقول، توثيق الرهن وفكه، توثيق إقرارات الكفالة الشخصية والغرمية وفكها، إصدار الوكالات.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'الإفلاس',
    content:
     'تقديم طلبات الإفلاس وقيدها لدى المحاكم التجارية، تقديم طلب إجراء التسوية الوقائية، إجراء إعادة التنظيم المالي، وإجراء التصفية.',   
      icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },

   {
    title: 'التركة والأوقاف',
    content:
      
    'تصفية التركات، حل نزاعات الورثة، تولي أعمال نظارة الأوقاف، توثيق وبيان شروط ومصارف الأوقاف والوصايا.',
      
     icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

const ServiceCard = ({ item, className = '' }) => (
  <div
    className={`group relative bg-white/95 backdrop-blur-sm px-6 py-8
      shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)]
      transition-all duration-500 ease-out hover:-translate-y-1
      ${className}`}
    style={{
      clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
    }}
  >
    {/* Cut corner line decoration */}
    <div
      className="absolute top-0 right-0 w-[57px] h-[1px] bg-gray-200 origin-top-right rotate-[-45deg]"
      style={{ top: '19px', right: '-1px' }}
    />

    {/* Diamond icon badge */}
    <div className="mb-5 inline-flex">
      <div className="w-11 h-11 rotate-45 bg-gray-100 group-hover:bg-blue group-hover:text-white
        flex items-center justify-center transition-all duration-500">
        <div className="-rotate-45 text-blue/70 group-hover:text-white transition-colors duration-500">
          {item.icon}
        </div>
      </div>
    </div>

    {/* Title */}
    <h3 className="text-[17px] lg:text-[19px] font-bold text-blue mb-3 leading-[1.5]">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-[13px] lg:text-[14px] text-gray-500 leading-[1.8]">
      {item.content}
    </p>
  </div>
)

const Services = () => {
  const sectionRef = useRef(null)
  const stripRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const mm = gsap.matchMedia()

    mm.add('(max-width: 767px)', () => {
      const strip = stripRef.current
      if (!strip) return

      const stripWidth = strip.scrollWidth
      const scrollLength = stripWidth - window.innerWidth + 80

      gsap.to(strip, {
        x: () => scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${stripWidth}`,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0 w-full min-h-[100%]">
        {/* Background image */}
        <Image
          src="/main/office.png"
          alt=""
          fill
          className="fixed object-cover"
          quality={85}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue/80 opacity-65" />

      <div className={`relative z-10 ${styles.padding}`}>
        <div className={`${styles.container} flex flex-col gap-16`}>

          {/* Header area */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left: label + title */}
            <div className="flex flex-col gap-10 max-w-[650px]">
             {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-blue/10 bg-white px-5 py-2.5 rounded-full w-fit shadow-sm">
              <div className="w-1.5 h-1.5 bg-beige rounded-full" />
              <span className="text-[14px] text-blue font-medium">خدماتنا</span>
            </div>
             
               <Title
               as="h2"
               className={`${styles.title2} text-white font-bold`}>
               نقدم لعملائنا خدمات قانونية
                <br className="hidden md:block" />
               شاملة ومتكاملة
               </Title>
              </div>

            {/* Right: small paragraph */}
            <Paragraph className="text-[15px] lg:text-[18px] text-white/60 leading-[1.9] max-w-[350px] md:mt-auto">
              يجمع فريقنا بين الخبرة القانونية والرؤية العملية لتقديم حلول مخصصة تناسب احتياجات كل عميل
            </Paragraph>
          </div>

          {/* Desktop grid — hidden on mobile */}
          <div className="hidden md:grid mt-5 grid-cols-2 md:grid-cols-3 gap-5">
            {servicesData.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>

          {/* Mobile horizontal scroll strip — visible only on mobile */}
          <div className="md:hidden mt-5 overflow-visible">
            <div
              ref={stripRef}
              className="flex flex-nowrap gap-4"
            >
              {servicesData.map((item, i) => (
                <ServiceCard
                  key={i}
                  item={item}
                  className="w-[280px] flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue px-7 py-3.5 
                rounded-full text-[15px] font-medium 
                hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10"
            >
              احجز استشارتك الآن
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Services