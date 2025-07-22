import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "tofu-200g",
      name: "Pure Plant Tofu - Soya Paneer",
      weight: "200g",
      price: "₹120",
      originalPrice: "₹150",
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      description: "Handcrafted vegan protein alternative to paneer. Perfect for salads, curries, and stir-fries.",
      features: ["High Protein", "0 Preservatives", "3 Weeks Shelf Life", "Cholesterol Free"],
      isNew: true,
      isBestseller: false
    },
    {
      id: "tofu-500g",
      name: "Pure Plant Tofu - Family Pack",
      weight: "500g",
      price: "₹280",
      originalPrice: "₹350",
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      description: "Larger pack for families who love plant-based nutrition. Same great taste, more value.",
      features: ["High Protein", "0 Preservatives", "3 Weeks Shelf Life", "Family Size"],
      isNew: false,
      isBestseller: true
    },
    {
      id: "tofu-silken",
      name: "Pure Plant Silken Tofu",
      weight: "300g",
      price: "₹140",
      originalPrice: "₹170",
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      description: "Smooth, creamy texture perfect for desserts, smoothies, and delicate dishes.",
      features: ["Silky Smooth", "Dessert Perfect", "High Protein", "Vegan Friendly"],
      isNew: true,
      isBestseller: false
    },
    {
      id: "tofu-firm",
      name: "Pure Plant Firm Tofu",
      weight: "250g",
      price: "₹130",
      originalPrice: "₹160",
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      description: "Extra firm texture that holds its shape perfectly for grilling and frying.",
      features: ["Extra Firm", "Grill Ready", "High Protein", "Shape Holding"],
      isNew: false,
      isBestseller: true
    },
    {
      id: "tofu-marinated",
      name: "Pure Plant Marinated Tofu",
      weight: "220g",
      price: "₹160",
      originalPrice: "₹190",
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      description: "Pre-marinated with aromatic Indian spices. Ready to cook delicious meals.",
      features: ["Pre-Marinated", "Indian Spices", "Ready to Cook", "Flavorful"],
      isNew: true,
      isBestseller: false
    },
    {
      id: "tofu-mini",
      name: "Pure Plant Mini Tofu Pack",
      weight: "100g",
      price: "₹70",
      originalPrice: "₹85",
      image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      description: "Perfect trial size for first-time tofu users. Discover the taste of pure plant protein.",
      features: ["Trial Size", "Perfect Portion", "High Protein", "Beginner Friendly"],
      isNew: false,
      isBestseller: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Plant-Based</span> Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our range of handcrafted, preservative-free tofu products. 
            Each pack is made with love and the finest soybeans.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
              <Leaf className="text-primary" size={20} />
              <span className="text-sm font-medium">100% Vegan</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
              <Shield className="text-primary" size={20} />
              <span className="text-sm font-medium">No Preservatives</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
              <Heart className="text-primary" size={20} />
              <span className="text-sm font-medium">High Protein</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
              <Clock className="text-primary" size={20} />
              <span className="text-sm font-medium">Fresh Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>
                  )}
                </div>

                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs">
                      {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">Weight: {product.weight}</p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Link to={`/products/${product.id}`} className="flex-1">
                    <Button className="w-full">View Details</Button>
                  </Link>
                  <Button variant="outline" size="icon">
                    <Heart size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly developing new plant-based products. 
            Get in touch with us for custom requirements or bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link to="/store-locator">
              <Button variant="outline" size="lg">Find Store Near You</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;