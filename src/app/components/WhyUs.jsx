import React from 'react'
import styles from '../style'
import Title from './Title'
import Paragraph from './Paragraph'

const reasons = [
  {
    number: '01',
    title: 'فهم عميق لأعمالك',
    content:
      'نبذل الوقت الكافي لاستيعاب نظام منشأتك والسياق الذي تعمل فيه ومواطن القوة والضعف لديها والتحديات والفرص التي تواجهها.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'خبرة قانونية متخصصة',
    content:
      'فريقنا يضم نخبة من المحامين والمستشارين القانونيين بخبرات تتجاوز عقدين في مختلف التخصصات القانونية والقضائية.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'نتائج قابلة للقياس',
    content:
      'نلتزم بتحقيق نتائج ملموسة وقابلة للقياس لعملائنا، مع تقديم تقارير دورية شفافة عن سير القضايا والإجراءات القانونية.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className={`relative  min-h-[100vh] overflow-hidden bg-gradient-to-b from-gray-100 to-white ${styles.padding}`}
    >
      {/* Decorative blurred circles */}
      <div className="hidden gradient1 z-0" />
      <div className="hidden gradient2 z-0" />




      <div className={`${styles.container} ${styles.marginY} flex flex-col gap-16 relative z-10`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 ">
          {/* Left side */}
          <div className="flex flex-col gap-6 max-w-[600px]">
            <div
              className="inline-flex items-center gap-2 border border-blue/10
              bg-white px-5 py-2.5 rounded-full w-fit shadow-sm"
            >
              <div className="w-1.5 h-1.5 bg-beige rounded-full" />
              <span className="text-[14px] text-blue font-medium">لمــاذا نحن ؟</span>
            </div>

            <Title as='h2' className={`${styles.title2} text-blue`}>
              لماذا تختار <span className='text-beige'>المهوس</span> {''}
              <br className='hidden lg:blocl' />
              للمحاماة والاستشارات
            </Title>
          </div>

          {/* Right side */}
          <Paragraph className="text-[15px] lg:text-[17px] text-gray-600 leading-[1.9] lg:max-w-[420px] mt-2 md:mt-auto">
            نقدم في شركة المهوس للمحاماة والاستشارات القانونية خبرات قانونية متخصصة وحلولًا عملية تلبي احتياجات الأفراد والشركات، من خلال فريق من المحامين ذوي الكفاءة العالية
          </Paragraph>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
         ">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-lg p-8 lg:p-10
                hover:bg-gray-50 transition-all duration-500 cursor-default"
            >
              {/* Top row: number + icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[48px] lg:text-[56px] font-bold text-blue/40 leading-none
                  group-hover:text-blue/80 transition-colors duration-500">
                  {item.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-blue/5 flex items-center justify-center
                  text-blue/40 group-hover:bg-blue group-hover:text-white
                  transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] lg:text-[20px] font-bold text-blue mb-3">
                {item.title}
              </h3>

              {/* Bottom accent line */}
              <div className="w-8 h-[2px] bg-blue/10 mb-4 group-hover:w-12 transition-all duration-500" />

              {/* Description */}
              <p className="text-[14px] lg:text-[15px] text-gray-400 leading-[1.8]
                group-hover:text-gray-600 transition-colors duration-500">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat bar 
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[40px] lg:text-[48px] font-bold text-blue">+500</span>
            <span className="text-[14px] text-gray-400">قضية ناجحة</span>
          </div>
          <div className="hidden sm:block w-[1px] h-14 bg-blue/10" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[40px] lg:text-[48px] font-bold text-blue">+20</span>
            <span className="text-[14px] text-gray-400">سنة خبرة</span>
          </div>
          <div className="hidden sm:block w-[1px] h-14 bg-blue/10" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[40px] lg:text-[48px] font-bold text-blue">+300</span>
            <span className="text-[14px] text-gray-400">عميل راضي</span>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default WhyUs