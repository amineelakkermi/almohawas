import localFont from "next/font/local"
import "./globals.css"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"


const avenir = localFont({
  src: "./fonts/alfont_com_AlFont_com_AvenirArabic-Medium.otf",
  variable: "--font-avenir",
  weight: "400",
  display: "swap",
})


export const metadata = {
  title: {
    default: "المهوس | شركة محاماة واستشارات قانونية",
    template: "%s | المهوس للاستشارات القانونية",
  },
  description:
    "مكتب المهوس للاستشارات والخدمات القانونية - خبرة واسعة في تقديم الحلول القانونية المتكاملة للأفراد والشركات.",
  keywords: [
    "استشارات قانونية",
    "خدمات قانونية",
    "محامي",
    "مكتب محاماة",
    "حلول قانونية",
  ],
  authors: [{ name: "المهوس" }],
  creator: "المهوس",
  publisher: "المهوس",
  robots: {
    index: true,
    follow: true,
  },
  category: "Legal Services",
}




export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${avenir.variable} font-avenir antialiased`}>
        <ScrollTop />
        {children}
        <Footer />
      </body>
    </html>
  )
}