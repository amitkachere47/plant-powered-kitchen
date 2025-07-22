import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, TrendingUp, Heart, Share2, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "nutrition", name: "Nutrition", count: 8 },
    { id: "recipes", name: "Recipes", count: 6 },
    { id: "sustainability", name: "Sustainability", count: 5 },
    { id: "lifestyle", name: "Lifestyle", count: 3 },
    { id: "news", name: "Company News", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Plant-Based Protein: Why Tofu Leads the Way",
      excerpt: "Discover why tofu is considered one of the most complete plant-based proteins and how it can transform your nutrition.",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&h=300&fit=crop",
      author: "Dr. Meera Patel",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "nutrition",
      tags: ["Protein", "Health", "Nutrition Facts"],
      featured: true,
      views: 2840
    },
    {
      id: 2,
      title: "5 Delicious Ways to Cook Tofu That Will Change Your Mind",
      excerpt: "Transform your cooking with these simple yet incredible tofu recipes that showcase its versatility and taste.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=300&fit=crop",
      author: "Chef Arjun Kumar",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "recipes",
      tags: ["Cooking", "Recipes", "Indian Food"],
      featured: false,
      views: 1920
    },
    {
      id: 3,
      title: "Our Journey to Carbon Neutrality: A Year in Review",
      excerpt: "How Pure Plant achieved carbon neutrality in 2023 and what it means for the future of sustainable food production.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop",
      author: "Sustainability Team",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "sustainability",
      tags: ["Environment", "Carbon Neutral", "Sustainability"],
      featured: true,
      views: 3250
    },
    {
      id: 4,
      title: "Plant-Based Living: Small Changes, Big Impact",
      excerpt: "Simple lifestyle modifications that can help you embrace plant-based living without overwhelming your routine.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
      author: "Lifestyle Team",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "lifestyle",
      tags: ["Vegan", "Lifestyle", "Health Tips"],
      featured: false,
      views: 1560
    },
    {
      id: 5,
      title: "The Science Behind Tofu: From Soybean to Superfood",
      excerpt: "Explore the fascinating process of tofu production and the nutritional science that makes it a superfood.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=300&fit=crop",
      author: "Dr. Rajesh Singh",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "nutrition",
      tags: ["Science", "Production", "Nutrition"],
      featured: false,
      views: 2180
    },
    {
      id: 6,
      title: "Tofu in Traditional Indian Cuisine: A Modern Twist",
      excerpt: "How to incorporate tofu into classic Indian dishes while maintaining authentic flavors and textures.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=300&fit=crop",
      author: "Chef Priya Sharma",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "recipes",
      tags: ["Indian Food", "Traditional", "Fusion"],
      featured: false,
      views: 1740
    },
    {
      id: 7,
      title: "Building Sustainable Supply Chains: Our Farmer Partnerships",
      excerpt: "Meet the farmers who make Pure Plant possible and learn about our commitment to sustainable agriculture.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop",
      author: "Supply Chain Team",
      date: "2023-12-28",
      readTime: "11 min read",
      category: "sustainability",
      tags: ["Farmers", "Supply Chain", "Partnership"],
      featured: false,
      views: 980
    },
    {
      id: 8,
      title: "Pure Plant Expands to 50 Cities: A Milestone Achievement",
      excerpt: "Celebrating our expansion milestone and what it means for plant-based food accessibility across India.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=300&fit=crop",
      author: "Company News",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "news",
      tags: ["Expansion", "Milestone", "Growth"],
      featured: false,
      views: 1420
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pure Plant <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the latest in plant-based nutrition, sustainable living, and delicious recipes. 
            Join our community of conscious food lovers.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <BookOpen className="text-primary" size={24} />
            <span className="text-lg">Fresh insights every week</span>
          </div>
        </div>
      </section>

      {/* Search and Navigation */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {selectedCategory === "all" && featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <CardHeader className="p-0 relative">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-80 hover:opacity-100">
                            <Heart size={14} />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-80 hover:opacity-100">
                            <Share2 size={14} />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                        <CardTitle className="text-xl mb-3 line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{formatDate(post.date)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button className="w-full">Read Article</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {selectedCategory === "all" ? "Latest Articles" : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <CardHeader className="p-0 relative">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="icon" variant="secondary" className="h-8 w-8 opacity-80 hover:opacity-100">
                          <Heart size={14} />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8 opacity-80 hover:opacity-100">
                          <Share2 size={14} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        {post.tags.slice(0, 1).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg mb-3 line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">Read More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">No articles found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest articles delivered to your inbox weekly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your email address" />
                <Button className="w-full">Subscribe</Button>
                <p className="text-xs text-muted-foreground">
                  Join 10,000+ readers who get our weekly newsletter
                </p>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp size={20} />
                  Popular This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">{post.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.views} views</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <div key={category.id} className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {category.name}
                      </button>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/recipes" className="block text-sm hover:text-primary transition-colors">
                  Recipe Collection
                </Link>
                <Link to="/sustainability" className="block text-sm hover:text-primary transition-colors">
                  Sustainability Report
                </Link>
                <Link to="/about" className="block text-sm hover:text-primary transition-colors">
                  About Pure Plant
                </Link>
                <Link to="/contact" className="block text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;