import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import ProductGallery from "@/components/ProductGallery";
import WhyPurePlant from "@/components/WhyPurePlant";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <HeroSection />
      <FeaturesStrip />
      <ProductGallery />
      <WhyPurePlant />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
