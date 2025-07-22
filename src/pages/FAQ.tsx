import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, ShoppingCart, Truck, Leaf, Users, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions", icon: <HelpCircle className="w-4 h-4" />, count: 28 },
    { id: "product", name: "Products", icon: <Leaf className="w-4 h-4" />, count: 12 },
    { id: "ordering", name: "Ordering", icon: <ShoppingCart className="w-4 h-4" />, count: 8 },
    { id: "shipping", name: "Shipping", icon: <Truck className="w-4 h-4" />, count: 6 },
    { id: "account", name: "Account", icon: <Users className="w-4 h-4" />, count: 2 }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is Pure Plant Tofu made from?",
      answer: "Pure Plant Tofu is made from 100% natural soybeans, water, and a natural coagulant (INS 511). We use only non-GMO soybeans sourced from certified organic farmers. No artificial preservatives, colors, or flavors are added.",
      category: "product",
      tags: ["ingredients", "organic", "natural"]
    },
    {
      id: 2,
      question: "How long does Pure Plant Tofu last?",
      answer: "Our tofu has a refrigerated shelf life of 3 weeks when unopened. Once opened, it should be consumed within 3-5 days. Always store in the refrigerator at 2-8°C and check the expiry date on packaging.",
      category: "product",
      tags: ["shelf life", "storage", "freshness"]
    },
    {
      id: 3,
      question: "Is Pure Plant Tofu suitable for vegans?",
      answer: "Yes, absolutely! Pure Plant Tofu is 100% vegan and plant-based. It contains no animal products or by-products and is certified vegan. It's a perfect protein alternative for vegans, vegetarians, and anyone following a plant-based diet.",
      category: "product",
      tags: ["vegan", "vegetarian", "plant-based"]
    },
    {
      id: 4,
      question: "How much protein does Pure Plant Tofu contain?",
      answer: "Pure Plant Tofu contains approximately 15.7g of protein per 100g serving, making it an excellent source of complete plant-based protein with all essential amino acids.",
      category: "product",
      tags: ["protein", "nutrition", "amino acids"]
    },
    {
      id: 5,
      question: "Where can I buy Pure Plant products?",
      answer: "You can buy Pure Plant products at our flagship stores, partner retail locations across 50+ cities, or order online through our website. Use our store locator to find the nearest outlet to you.",
      category: "ordering",
      tags: ["stores", "online", "locations"]
    },
    {
      id: 6,
      question: "Do you offer home delivery?",
      answer: "Yes, we offer home delivery in most metro cities and major towns. Same-day delivery is available in select areas. Delivery charges apply based on location and order value. Free delivery on orders above ₹500.",
      category: "shipping",
      tags: ["delivery", "shipping", "free delivery"]
    },
    {
      id: 7,
      question: "What is your return policy?",
      answer: "We accept returns within 24 hours of delivery if the product is damaged or defective. Due to the perishable nature of our products, we cannot accept returns for change of mind. Contact our customer service for assistance.",
      category: "ordering",
      tags: ["returns", "refunds", "policy"]
    },
    {
      id: 8,
      question: "How should I store Pure Plant Tofu?",
      answer: "Always keep Pure Plant Tofu refrigerated at 2-8°C. Do not freeze as it will change the texture. Once opened, store in an airtight container with fresh water changed daily, and consume within 3-5 days.",
      category: "product",
      tags: ["storage", "refrigeration", "care"]
    },
    {
      id: 9,
      question: "Can I place bulk orders for events or restaurants?",
      answer: "Yes, we offer bulk ordering for restaurants, caterers, and events. Contact our B2B team at business@pureplant.in or call +91 98765 43210 for custom pricing and delivery arrangements.",
      category: "ordering",
      tags: ["bulk", "restaurant", "catering"]
    },
    {
      id: 10,
      question: "Is Pure Plant Tofu gluten-free?",
      answer: "Yes, Pure Plant Tofu is naturally gluten-free as it's made from soybeans. However, always check the packaging for the most current allergen information and manufacturing details.",
      category: "product",
      tags: ["gluten-free", "allergens", "dietary"]
    },
    {
      id: 11,
      question: "How do I cook with tofu for the first time?",
      answer: "Start by pressing the tofu to remove excess water, then cut into cubes. You can marinate it with spices, pan-fry until golden, or add directly to curries. Check our recipe section for detailed cooking guides and tips.",
      category: "product",
      tags: ["cooking", "recipes", "tips"]
    },
    {
      id: 12,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, net banking, digital wallets, and cash on delivery (where available). All online payments are processed securely.",
      category: "ordering",
      tags: ["payment", "credit card", "UPI"]
    },
    {
      id: 13,
      question: "Do you ship outside India?",
      answer: "Currently, we only ship within India. We're working on international shipping options and will update our customers once available. Follow us on social media for announcements.",
      category: "shipping",
      tags: ["international", "shipping", "India"]
    },
    {
      id: 14,
      question: "Is your packaging environmentally friendly?",
      answer: "Yes, we use 95% recyclable packaging materials and are working towards 100% biodegradable packaging by 2024. Our commitment to sustainability extends to all aspects of our business.",
      category: "product",
      tags: ["packaging", "environment", "sustainability"]
    },
    {
      id: 15,
      question: "Can I track my order?",
      answer: "Yes, once your order is shipped, you'll receive a tracking number via SMS and email. You can track your order status on our website or through the delivery partner's app.",
      category: "shipping",
      tags: ["tracking", "order status", "delivery"]
    },
    {
      id: 16,
      question: "Do you offer subscription services?",
      answer: "We're currently developing a subscription service for regular customers. Sign up for our newsletter to be notified when this feature becomes available.",
      category: "ordering",
      tags: ["subscription", "regular delivery", "newsletter"]
    },
    {
      id: 17,
      question: "What makes Pure Plant Tofu different from others?",
      answer: "Our tofu is handcrafted in small batches using traditional methods, made from locally sourced non-GMO soybeans, contains zero preservatives, and has a longer shelf life of 3 weeks. We focus on quality, sustainability, and taste.",
      category: "product",
      tags: ["quality", "handcrafted", "difference"]
    },
    {
      id: 18,
      question: "Can children consume Pure Plant Tofu?",
      answer: "Yes, Pure Plant Tofu is safe and nutritious for children above 1 year. It's an excellent source of protein and calcium for growing kids. Always consult your pediatrician for specific dietary advice.",
      category: "product",
      tags: ["children", "nutrition", "safety"]
    },
    {
      id: 19,
      question: "How can I become a retail partner?",
      answer: "We're always looking for retail partners. Fill out our partnership form on the website or contact our business development team at partners@pureplant.in with your store details and location.",
      category: "account",
      tags: ["partnership", "retail", "business"]
    },
    {
      id: 20,
      question: "Do you have a loyalty program?",
      answer: "We're launching a loyalty program soon where customers can earn points on purchases and redeem them for discounts. Stay tuned to our social media for the official announcement.",
      category: "account",
      tags: ["loyalty", "rewards", "points"]
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find quick answers to common questions about Pure Plant products, ordering, delivery, and more. 
            Can't find what you're looking for? Contact our support team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 text-sm">🔍 Instant Search</Badge>
            <Badge className="px-4 py-2 text-sm">💬 24/7 Support</Badge>
            <Badge className="px-4 py-2 text-sm">📚 Comprehensive Guides</Badge>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              Try searching for "tofu", "delivery", "vegan", or any other topic
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant={selectedCategory === category.id ? "secondary" : "outline"}>
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular FAQs */}
            <Card>
              <CardHeader>
                <CardTitle>Most Popular</CardTitle>
                <CardDescription>Frequently searched questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularFAQs.slice(0, 5).map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory(faq.category);
                        // Scroll to the FAQ
                        const element = document.getElementById(`faq-${faq.id}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-left text-sm hover:text-primary transition-colors line-clamp-2"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Call Support</p>
                    <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Email Support</p>
                    <p className="text-xs text-muted-foreground">support@pureplant.in</p>
                  </div>
                </div>
                <Link to="/contact" className="block">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {filteredFAQs.length} questions found
                {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                {searchTerm && ` for "${searchTerm}"`}
              </h2>
              {searchTerm && (
                <Button 
                  variant="ghost" 
                  onClick={() => setSearchTerm("")}
                  className="text-primary hover:text-primary/80"
                >
                  Clear search
                </Button>
              )}
            </div>

            {/* FAQ Accordion */}
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={`faq-${faq.id}`} 
                    id={`faq-${faq.id}`}
                    className="border rounded-lg px-6 py-2"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="text-lg">{faq.question}</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {categories.find(c => c.id === faq.category)?.name}
                          </Badge>
                          {faq.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline">Ask a Question</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Help Links</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find specific information quickly with these helpful resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Product Guide", description: "Learn about our tofu varieties", link: "/products", icon: "🌱" },
              { title: "Recipe Collection", description: "Cooking tips and recipes", link: "/recipes", icon: "👨‍🍳" },
              { title: "Store Locator", description: "Find Pure Plant near you", link: "/store-locator", icon: "📍" },
              { title: "Sustainability", description: "Our environmental commitment", link: "/sustainability", icon: "🌍" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={item.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;