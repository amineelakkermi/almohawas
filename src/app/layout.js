import { Tajawal } from "next/font/google"
import "./globals.css"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
})

export const metadata = {
  title: {
    default: "المهوس | مكتب استشارات وخدمات قانونية",
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
      <body className={`${tajawal.className} antialiased`}>
        <ScrollTop />
        {children}
        <Footer />
      </body>
    </html>
  )
}