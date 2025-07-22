import { Button } from "@/components/ui/button";
import { Sprout, Heart, Award, Recycle } from "lucide-react";

const WhyPurePlant = () => {
  const benefits = [
    {
      icon: Sprout,
      title: "Plant-Based Living",
      description: "Embrace a healthier lifestyle with our 100% plant-based products"
    },
    {
      icon: Heart,
      title: "Handcrafted Process",
      description: "Each batch is carefully crafted with love and attention to detail"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "FSSAI certified, ensuring the highest standards of quality and safety"
    },
    {
      icon: Recycle,
      title: "Sustainable Choice",
      description: "Environmentally conscious production with recyclable packaging"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/e509dec7-985e-4fe8-9bed-bc2e20e96976.png"
                alt="Pure Plant by KalāJayā"
                className="w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Why Pure Plant?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Pure Plant, we believe in the power of plants to nourish and heal. 
                Our journey began with a simple mission: to create the finest plant-based 
                alternatives that don't compromise on taste, nutrition, or quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 font-poppins">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPurePlant;