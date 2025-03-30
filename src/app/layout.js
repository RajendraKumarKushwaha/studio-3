import Head from "next/head";
import "./globals.css";
import HeaderPage1 from "@/component/Header";
import Footer from "@/component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Fonts Preload */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="true"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cinzel&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <HeaderPage1/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
