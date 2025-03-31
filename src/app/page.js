import AboutDetails from "@/component/AboutDetails";
import AboutSection from "@/component/AboutPage1";
import AboutPage1 from "@/component/AboutPage1";
import ContactUs from "@/component/ContactUs";
import MasonryGallery from "@/component/Gallery";
import HomePage5 from "@/component/HomePage5";
import FlowGallerySSR from "@/component/PortfolioPage";
import FlowGallery from "@/component/PortfolioPage";
import ServicesPage1 from "@/component/ServicePage1";
import Testimonials from "@/component/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <HomePage5/>
  <AboutSection/>
  <ServicesPage1/>
  <FlowGallerySSR/>
  <MasonryGallery/>
  <ContactUs/>
  
  </>
  );
}
