"use client"
import React from 'react'
import styles from '../style'

const infos = [
  {
    number: '01',
    title: 'رؤيتنا',
    content:
      'أن نكون المرجع القانوني الأول في المملكة العربية السعودية، من خلال تقديم حلول قانونية مبتكرة ترتقي بمعايير المهنة وتحقق العدالة لعملائنا بأعلى مستويات الاحترافية والنزاهة.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'رسالتنا',
    content:
      'تمكين الأفراد والمؤسسات من حماية حقوقهم وتحقيق أهدافهم القانونية عبر فريق من المحامين المتخصصين، وتقديم استشارات قانونية شاملة ومدروسة تواكب التطورات التشريعية وتلبي تطلعات عملائنا.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'قيمنا',
    content:
      'النزاهة والشفافية في كل تعاملاتنا، والالتزام بأعلى معايير الجودة المهنية، والسرية التامة في حفظ معلومات عملائنا، والسعي الدائم نحو التميز والابتكار في الحلول القانونية.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
]


const OurInfo = () => {
  const [openIndex, setOpenIndex] = React.useState(0)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="w-full py-8">
      <div className="flex flex-col">
        {infos.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={item.title}
              className={`group border-b border-blue/10 transition-all duration-500 ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full flex items-center gap-6 py-7 lg:py-9 cursor-pointer"
              >
                {/* Number */}
                <span className={`text-[13px] font-medium tracking-wider transition-colors duration-300 ${
                  isOpen ? 'text-blue' : 'text-blue'
                }`}>
                  {item.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  isOpen
                    ? 'bg-blue text-white shadow-lg shadow-blue/20 scale-100'
                    : 'bg-blue text-white scale-95'
                }`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h2 className={`text-[24px] lg:text-[30px] font-bold transition-colors duration-300 ${
                  isOpen ? 'text-blue' : 'text-blue'
                }`}>
                  {item.title}
                </h2>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Toggle indicator */}
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  isOpen
                    ? 'border-blue bg-blue rotate-0'
                    : 'border-blue/20 bg-transparent rotate-0'
                }`}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? 'white' : '#1b2340'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-8 pr-[calc(1.5rem+48px+24px+13px)] lg:pr-[calc(1.5rem+48px+24px+13px)]">
                  <div className={`w-10 h-[2px] bg-blue/20 mb-4 transition-all duration-500 ${
                    isOpen ? 'w-10' : 'w-0'
                  }`} />
                  <p className={`${styles.paragraph} text-blue/60 max-w-[700px] leading-[1.9]`}>
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurInfo