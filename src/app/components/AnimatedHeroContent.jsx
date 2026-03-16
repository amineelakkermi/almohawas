import styles from "../style";

const AnimatedHeroContent = () => {


  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
    
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

      {/* Titre */}
      <h1 className={`${styles.title}`}>
        حنكــة  حيث تلتقي الحكمة بالاستثمار
      </h1>

      {/* Paragraphe */}
      <p  className={`${styles.paragraph} text-right`}>
        نحن مكتب استثمار عائلي (Family Office) نعمل على تنمية ثروات العائلة برؤية استراتيجية طويلة المدى.
        <br className="hidden md:block" />
        نُترجم القيم العائلية إلى قرارات استثمارية متزنة، تُوازن بين الطموح والاتزان، وتُحقق الاستدامة عبر الأجيال.
      </p>

      {/* Boutons */}
      <div className="flex flex-row gap-4 mt-10">
       
        <a
          href="#investment"
          className="bg-white max-w-[250px] transition-colors duration-300 py-3 px-6 text-black text-[16px] flex items-center justify-center gap-2"
        >
          استكشف استثماراتنا
        </a>

         <a
          href="/contact"
          className="border  max-w-[250px] transition-colors duration-300 py-3 px-6 text-white text-[16px] flex items-center justify-center gap-2"
        >
          تواصل معنا
        </a>
      </div>
      </div>
    </div>
  );
};

export default AnimatedHeroContent;

