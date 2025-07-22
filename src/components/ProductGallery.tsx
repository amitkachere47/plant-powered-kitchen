import { Card, CardContent } from "@/components/ui/card";

const ProductGallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      title: "Premium Tofu Packaging",
      description: "Front & Back design showcase"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Product Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the versatility of our handcrafted tofu in various culinary creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Package Display */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png"
                  alt="Tofu Package Front & Back"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-poppins">Premium Tofu Package</h3>
              <p className="text-muted-foreground text-sm">Complete nutritional information and ingredient details</p>
            </CardContent>
          </Card>

          {/* Placeholder for future recipe images */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-primary text-2xl">🍳</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Tofu Stir-fry</p>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 font-poppins">Coming Soon</h3>
              <p className="text-muted-foreground text-sm">Delicious recipe showcases</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-accent text-2xl">🥗</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Tofu Salad</p>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 font-poppins">Coming Soon</h3>
              <p className="text-muted-foreground text-sm">Healthy meal inspirations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;