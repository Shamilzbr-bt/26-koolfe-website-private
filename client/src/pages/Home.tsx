/*
 * Home — KOOLFE
 * Page structure:
 *   Navbar (fixed, transparent → dark purple on scroll)
 *   HeroSection (full-screen, dark purple)
 *   ProductsSection (cream bg, 8 flavours grid)
 *   StorySection (dark purple, brand narrative + feature cards)
 *   ContactSection (cream bg, contact info + form)
 *   Footer (dark purple, minimal)
 */

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF9F0" }}>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <StorySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
