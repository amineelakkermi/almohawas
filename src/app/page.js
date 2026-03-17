import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import background from '../../public/main/background.webp'
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Cta from "./components/Cta";
import OurInfo from "./components/OurInfo";

export default function Home(){
  return (
   <div className="relative">
    <div className="relative min-h-[90vh]">
      {/* Background image qui couvre tout */}
      <Image
        src={background} 
        alt="background"
        className="object-cover "
        fill
      />
      <div className="overlay1" />
      {/* Navbar et Hero par-dessus le background */}
      <Navbar />
      <Hero />
    </div>

    <About />
    <OurInfo />
    <Services />
    <WhyUs />

    <Cta />

   </div>
  )
}