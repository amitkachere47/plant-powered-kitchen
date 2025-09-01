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
    { src: hero1, alt: "Hero image 1" },
    { src: hero2, alt: "Hero image 2" },
    { src: hero3, alt: "Hero image 3" },
    { src: hero4, alt: "Hero image 4" },
    { src: hero5, alt: "Hero image 5" },
  ];

  return (
    <section className="relative min-h-[80vh]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-[80vh]">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
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