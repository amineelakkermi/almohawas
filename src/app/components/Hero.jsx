import Link from "next/link";
import styles from "../style";
import SocialMedia from "./SocialMedia";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start">
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6
        gap-8 text-start h-[100%] flex flex-col mt-20"
      >
        {/* H1 */}
        <Title as="h1" className={`${styles.title} text-white`}>
          ريادة قانونية <span className="text-beige">تصون</span> حقوقكم..
          <br />
            ورؤية استراتيجية تدعم تطلعاتكم
        </Title>

        {/* Subtitle */}
        <Paragraph
          className={`${styles.paragraph} font-[400] text-white/70 max-w-[550px] md:max-w-[650px]`}
        >
          في شركة المهوس، نمزج بين عمق الخبرة القانونية السعودية وفهم تحديات
          المستقبل، لنكون شريككم الاستراتيجي في بناء بيئة قانونية آمنة ومستقرة
          لأعمالكم.
        </Paragraph>

        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-start flex-wrap">
          <Link
            href="#services"
            className="bg-white flex justify-center items-center text-black text-[15px] lg:text-[16px] rounded-full
            transition-all duration-300 py-3 px-8 hover:bg-white hover:text-black"
          >
            اكتشف حلولنا القانونية
          </Link>

          <Link
            href="#cta"
            className="border-2 border-white/50 flex justify-center items-center text-white text-[15px] lg:text-[16px] rounded-full
            transition-all duration-300 py-3 px-8 hover:bg-white/10"
          >
            تحدث مع مستشارنا الآن
          </Link>
        </div>

        <SocialMedia />
      </div>
    </section>
  );
};

export default Hero;