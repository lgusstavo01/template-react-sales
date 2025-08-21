import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { ProductsGrid } from "./components/ProductsGrid";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WyChooseUs";

export function App() {
  return (
    <>
      <NavBar />
      <HeroSection bgUrl="./imgHome.png" />
      <WhyChooseUs />
      <ProductsGrid />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
