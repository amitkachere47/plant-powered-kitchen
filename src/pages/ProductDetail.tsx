import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, Leaf, Clock, MapPin } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: "tofu-200g",
    name: "Pure Plant Tofu - Soya Paneer",
    weight: "200g",
    price: "₹120",
    originalPrice: "₹150",
    rating: 4.8,
    reviews: 156,
    images: [
      "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png",
      "/lovable-uploads/81e1588b-2e85-48e6-b28d-f735e5746ce7.png",
      "/lovable-uploads/96f8b1d6-b99a-4041-963f-7fc99d0b782e.png"
    ],
    description: "Our signature tofu is handcrafted with the finest soybeans, providing a perfect plant-based protein alternative to traditional paneer. With zero preservatives and a creamy, firm texture, it's ideal for Indian cuisine and international dishes alike.",
    highlights: [
      "100% Plant-Based & Vegan Friendly",
      "Zero Preservatives, Cholesterol & Trans Fat",
      "High Protein Content (15g per 100g)",
      "Refrigerated Shelf Life: 3 Weeks",
      "FSSAI Certified & Made in Hygienic Facility",
      "Perfect for Curries, Salads & Stir-fries"
    ],
    ingredients: "Water, Soybeans (Non-GMO), Coagulant (INS 511)",
    nutritionPer100g: {
      energy: "144 kcal",
      protein: "15.7g",
      carbohydrates: "2.8g",
      fat: "8.7g",
      fiber: "1.2g",
      sodium: "12mg",
      calcium: "350mg"
    },
    storageInstructions: "Keep refrigerated at 2-8°C. Consume within 3 days of opening. Do not freeze.",
    certifications: ["FSSAI Certified", "Vegan Certified", "Non-GMO"],
    relatedProducts: [
      { id: "tofu-500g", name: "Family Pack 500g", price: "₹280", image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png" },
      { id: "tofu-silken", name: "Silken Tofu 300g", price: "₹140", image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png" },
      { id: "tofu-firm", name: "Firm Tofu 250g", price: "₹130", image: "/lovable-uploads/4f4e06a8-ecd2-4f24-ac73-537ee3e91856.png" }
    ]
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Redirecting to Checkout",
      description: "Taking you to secure payment page...",
    });
  };

  const handleShare = () => {
    navigator.share?.({
      title: product.name,
      text: product.description,
      url: window.location.href,
    }) || toast({
      title: "Link Copied!",
      description: "Product link copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                <Badge variant="outline">Bestseller</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
              <Badge variant="secondary">
                {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
              </Badge>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="text-primary" size={20} />
                <span className="text-sm">100% Vegan</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-primary" size={20} />
                <span className="text-sm">No Preservatives</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                <span className="text-sm">3 Weeks Shelf Life</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="text-primary" size={20} />
                <span className="text-sm">Fresh Delivery</span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-muted"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-muted"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1">
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
                <Button onClick={handleBuyNow} variant="secondary" className="flex-1">
                  Buy Now
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart size={16} />
                </Button>
                <Button variant="outline" size="icon" onClick={handleShare}>
                  <Share2 size={16} />
                </Button>
                <Link to="/store-locator" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <MapPin size={16} className="mr-2" />
                    Find in Store
                  </Button>
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <Badge key={cert} variant="outline">{cert}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="details" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Highlights</h4>
                  <ul className="space-y-1">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Ingredients</h4>
                  <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Storage Instructions</h4>
                  <p className="text-sm text-muted-foreground">{product.storageInstructions}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Information</CardTitle>
                <CardDescription>Per 100g serving</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(product.nutritionPer100g).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                      <p className="text-lg font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>{product.reviews} reviews • {product.rating} average rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  {[
                    { name: "Priya S.", rating: 5, comment: "Amazing taste and texture! Perfect for my daily curry needs." },
                    { name: "Raj M.", rating: 5, comment: "Finally, a tofu that doesn't fall apart while cooking. Highly recommended!" },
                    { name: "Meera K.", rating: 4, comment: "Good quality product. My kids love it in sandwiches." }
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recipes" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recipe Ideas</CardTitle>
                <CardDescription>Delicious ways to use Pure Plant Tofu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "Tofu Bhurji", time: "15 mins", difficulty: "Easy" },
                    { name: "Tandoori Tofu Tikka", time: "30 mins", difficulty: "Medium" },
                    { name: "Tofu Stir Fry", time: "20 mins", difficulty: "Easy" },
                    { name: "Palak Tofu Curry", time: "25 mins", difficulty: "Medium" }
                  ].map((recipe, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{recipe.name}</h4>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>⏱️ {recipe.time}</span>
                        <span>👨‍🍳 {recipe.difficulty}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/recipes">
                    <Button variant="outline">View All Recipes</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.relatedProducts.map((related) => (
              <Card key={related.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted rounded-t-lg">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{related.name}</CardTitle>
                  <p className="text-lg font-semibold text-primary">{related.price}</p>
                </CardContent>
                <CardContent className="p-4 pt-0">
                  <Link to={`/products/${related.id}`}>
                    <Button className="w-full">View Product</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;