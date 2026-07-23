import Image from "next/image";
import HeroSection from "./Sections/HeroSection/HeroSection";
import ServicesSection from "./Sections/ServiceSection/page";
import Testimonails from "./Sections/Testimonials/page";
import OurProcess from "./Sections/Process/page";
import FAQSection from "./Sections/FAQs/page";
import CTASection from "./Sections/CtaSection/page";

export default function Home() {
  return (
  <>
  <HeroSection/>
  <ServicesSection /> 
  <OurProcess />
  <Testimonails />
  <FAQSection />
  <CTASection />
  </>
  );
}
