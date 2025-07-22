import { Button } from "@/components/ui/button";
import { MapPin, ShoppingCart, Info } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-muted via-background to-muted min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
              <span className="text-primary">Handcrafted</span> with Care.{" "}
              <span className="text-accent">Powered by Plants.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              100% plant-based, premium quality Tofu (Soya Paneer) made with love and care. 
              Zero preservatives, maximum nutrition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                <Info className="mr-2 h-5 w-5" />
                Know the Benefits
              </Button>
              <Button variant="secondary" size="lg">
                <MapPin className="mr-2 h-5 w-5" />
                Locate Near You
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/81e1588b-2e85-48e6-b28d-f735e5746ce7.png"
                alt="Pure Plant Tofu Package"
                className="w-full h-auto max-w-md mx-auto transform rotate-12 hover:rotate-6 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-4 w-12 h-12 bg-primary/5 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;