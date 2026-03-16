import Link from "next/link";
import styles from "../style";
import SocialMedia from "./SocialMedia";
import ScrollTop from "./ScrollTop";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6
       gap-8
       text-start h-[100%] flex flex-col mt-20">

        {/* Titre */}
        <h1 className={`${styles.title} text-white`}>
          شركة المهوس للمحاماة
          <br />
          والإستشارات القانونية
        </h1>

        {/* Paragraphe */}
        <p className={`${styles.paragraph} text-white/70 max-w-[550px] md:max-w-[650px]`}>
          نقدّم حلولًا قانونية متكاملة للأفراد والشركات، ونرافق عملاءنا بخبرة قانونية راسخة ورؤية
          احترافية لضمان حماية الحقوق وتحقيق أفضل النتائج وفق أعلى المعايير المهنية.
        </p>

        {/* Boutons */}
        <div className="flex flex-row gap-4 justify-start">
          <Link
            href="#services"
            className="bg-white flex justify-center items-center text-black text-[15px] lg:text-[16px] rounded-full
            transition-all duration-300 py-3 px-8 hover:bg-white hover:text-black"
          >
            اكتشف خدماتنا
          </Link>

          <Link
            href="#contact"
            className="border-2 border-white/50 flex justify-center items-center text-white text-[15px] lg:text-[16px] rounded-full
            transition-all duration-300 py-3 px-8 hover:bg-white/10"
          >
            تواصل معنا
          </Link>
        </div>


        <div>
        <SocialMedia />
        </div>
      </div>

 
    
      
    </section>
  );
};

export default Hero;

