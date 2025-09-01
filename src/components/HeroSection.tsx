import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const HeroSection = () => {
  const heroImages = [
    { src: hero1, alt: "Fresh tofu cubes on wooden board" },
    { src: hero2, alt: "Tofu stir-fry with vegetables" },
    { src: hero3, alt: "Pure Plant tofu package" },
    { src: hero4, alt: "Healthy tofu salad bowl" },
    { src: hero5, alt: "Tofu paneer tikka skewers" },
  ];

  return (
    <section className="relative min-h-[80vh]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative bg-gradient-to-br from-muted via-background to-muted min-h-[80vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-background/60"></div>
                </div>
                
                <div className="container mx-auto px-4 py-12 relative z-10">
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
                        <Button variant="outline" size="lg">
                          <Info className="mr-2 h-5 w-5" />
                          Know the Benefits
                        </Button>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                      <div className="relative z-10">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-8 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 left-4 w-12 h-12 bg-primary/5 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSection;