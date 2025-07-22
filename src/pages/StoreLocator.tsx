import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Navigation, Search, Filter } from "lucide-react";
import { useState } from "react";

const StoreLocator = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");

  const cities = [
    { id: "all", name: "All Cities", count: 47 },
    { id: "mumbai", name: "Mumbai", count: 12 },
    { id: "pune", name: "Pune", count: 8 },
    { id: "bangalore", name: "Bangalore", count: 10 },
    { id: "delhi", name: "Delhi", count: 9 },
    { id: "hyderabad", name: "Hyderabad", count: 5 },
    { id: "chennai", name: "Chennai", count: 3 }
  ];

  const stores = [
    {
      id: 1,
      name: "Pure Plant Store - Koregaon Park",
      address: "Shop 15, ABC Mall, Koregaon Park, Pune 411001",
      phone: "+91 98765 43210",
      city: "pune",
      rating: 4.8,
      reviews: 156,
      hours: "9:00 AM - 9:00 PM",
      type: "flagship",
      distance: "0.5 km",
      features: ["Fresh Products", "Bulk Orders", "Recipe Consultation", "Samples Available"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Green Grocers - Bandra",
      address: "456 Linking Road, Bandra West, Mumbai 400050",
      phone: "+91 87654 32109",
      city: "mumbai",
      rating: 4.6,
      reviews: 89,
      hours: "8:00 AM - 10:00 PM",
      type: "partner",
      distance: "1.2 km",
      features: ["Fresh Products", "Home Delivery", "Online Orders"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Organic Valley - Whitefield",
      address: "789 Forum Mall, Whitefield, Bangalore 560066",
      phone: "+91 76543 21098",
      city: "bangalore",
      rating: 4.7,
      reviews: 203,
      hours: "10:00 AM - 8:00 PM",
      type: "partner",
      distance: "2.1 km",
      features: ["Fresh Products", "Bulk Orders", "Nutrition Advice"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Healthy Choice - Connaught Place",
      address: "Block A-123, Connaught Place, New Delhi 110001",
      phone: "+91 65432 10987",
      city: "delhi",
      rating: 4.5,
      reviews: 127,
      hours: "9:30 AM - 9:30 PM",
      type: "partner",
      distance: "0.8 km",
      features: ["Fresh Products", "Recipe Books", "Cooking Classes"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Pure Plant Express - Hitech City",
      address: "Cyber Towers, Hitech City, Hyderabad 500081",
      phone: "+91 54321 09876",
      city: "hyderabad",
      rating: 4.9,
      reviews: 94,
      hours: "8:30 AM - 8:30 PM",
      type: "flagship",
      distance: "3.2 km",
      features: ["Fresh Products", "Express Delivery", "Corporate Orders", "Bulk Discounts"],
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Green Market - Andheri",
      address: "Cross Road Mall, Andheri East, Mumbai 400069",
      phone: "+91 43210 98765",
      city: "mumbai",
      rating: 4.4,
      reviews: 76,
      hours: "9:00 AM - 9:00 PM",
      type: "partner",
      distance: "1.8 km",
      features: ["Fresh Products", "Home Delivery", "Weekend Specials"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Vegan Corner - MG Road",
      address: "Brigade Road Junction, MG Road, Bangalore 560025",
      phone: "+91 32109 87654",
      city: "bangalore",
      rating: 4.6,
      reviews: 142,
      hours: "10:00 AM - 10:00 PM",
      type: "partner",
      distance: "0.9 km",
      features: ["Fresh Products", "Vegan Recipes", "Nutrition Consultation"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Pure Plant Hub - Karol Bagh",
      address: "Central Market, Karol Bagh, New Delhi 110005",
      phone: "+91 21098 76543",
      city: "delhi",
      rating: 4.7,
      reviews: 188,
      hours: "9:00 AM - 8:00 PM",
      type: "flagship",
      distance: "1.5 km",
      features: ["Fresh Products", "Bulk Orders", "Corporate Catering", "Recipe Consultation"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop"
    }
  ];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesCity = selectedCity === "all" || store.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const getStoreTypeColor = (type: string) => {
    return type === "flagship" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground";
  };

  const getStoreTypeLabel = (type: string) => {
    return type === "flagship" ? "Pure Plant Store" : "Partner Store";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Find <span className="text-primary">Pure Plant</span> Near You
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Locate the nearest store carrying Pure Plant products. From flagship stores to trusted partners, 
            find fresh, high-quality tofu wherever you are in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 text-sm">🏪 50+ Locations</Badge>
            <Badge className="px-4 py-2 text-sm">🚚 Home Delivery</Badge>
            <Badge className="px-4 py-2 text-sm">📞 Call Ahead</Badge>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search by store name or area..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {cities.map((city) => (
                <Button
                  key={city.id}
                  variant={selectedCity === city.id ? "default" : "outline"}
                  onClick={() => setSelectedCity(city.id)}
                  className="whitespace-nowrap"
                >
                  {city.name} ({city.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Store List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {filteredStores.length} stores found
                  {selectedCity !== "all" && ` in ${cities.find(c => c.id === selectedCity)?.name}`}
                </h2>
                <Button variant="outline" size="sm">
                  <Navigation size={16} className="mr-2" />
                  Use My Location
                </Button>
              </div>

              <div className="space-y-6">
                {filteredStores.map((store) => (
                  <Card key={store.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-48 h-48 md:h-auto">
                        <img
                          src={store.image}
                          alt={store.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-lg">{store.name}</CardTitle>
                                <Badge className={getStoreTypeColor(store.type)}>
                                  {getStoreTypeLabel(store.type)}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span>{store.rating}</span>
                                  <span>({store.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Navigation className="w-4 h-4" />
                                  <span>{store.distance}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{store.address}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">{store.phone}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="text-sm">{store.hours}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                              {store.features.map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex gap-3 mt-4 pt-3 border-t">
                              <Button size="sm" className="flex-1">
                                Get Directions
                              </Button>
                              <Button variant="outline" size="sm">
                                Call Store
                              </Button>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredStores.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">No stores found</p>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or contact us to request a store in your area.
                  </p>
                  <Button>Request New Location</Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Order Online</Button>
                  <Button variant="outline" className="w-full">
                    WhatsApp Order
                  </Button>
                  <Button variant="outline" className="w-full">
                    Bulk Inquiry
                  </Button>
                </CardContent>
              </Card>

              {/* Store Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Store Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary text-primary-foreground">
                      Pure Plant Store
                    </Badge>
                    <div>
                      <p className="text-sm font-medium">Flagship Stores</p>
                      <p className="text-xs text-muted-foreground">
                        Full product range, bulk orders, recipe consultation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-secondary text-secondary-foreground">
                      Partner Store
                    </Badge>
                    <div>
                      <p className="text-sm font-medium">Retail Partners</p>
                      <p className="text-xs text-muted-foreground">
                        Selected products, local convenience
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>
                    Can't find a store near you?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Contact our store locator support team
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>📧</span>
                        <span>stores@pureplant.in</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span>🚚</span>
                      <span>Home delivery available in most areas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⚡</span>
                      <span>Same-day delivery in metro cities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📦</span>
                      <span>Free delivery on orders above ₹500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Become a Partner Store?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing network of retail partners and bring Pure Plant products to your community. 
            We offer competitive margins and marketing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Partnership Inquiry</Button>
            <Button variant="outline" size="lg">Download Partnership Kit</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoreLocator;