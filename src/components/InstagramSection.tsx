import { Button } from "@/components/ui/button";
import { Instagram, Camera } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired with recipes, tips, and behind-the-scenes content from Pure Plant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Instagram QR and Info */}
          <div className="text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/96f8b1d6-b99a-4041-963f-7fc99d0b782e.png"
                alt="Instagram QR Code - @kj_pureplant"
                className="w-64 h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary font-poppins">@kj_pureplant</h3>
              <p className="text-muted-foreground">
                Scan the QR code or follow us for daily inspiration, 
                recipe ideas, and product updates!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </Button>
                <Button variant="outline">
                  <Camera className="mr-2 h-5 w-5" />
                  Share Your Recipe
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Preview Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Instagram className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-accent font-semibold font-poppins text-lg">
            "Follow us for Recipes, Tips & Product Launches!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;