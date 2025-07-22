import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, Users, ChefHat, Search, Filter, Heart, Share2 } from "lucide-react";
import { useState } from "react";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Recipes" },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "dinner", name: "Dinner" },
    { id: "snacks", name: "Snacks" },
    { id: "desserts", name: "Desserts" }
  ];

  const recipes = [
    {
      id: 1,
      name: "Classic Tofu Bhurji",
      description: "A spicy and flavorful Indian scramble perfect for breakfast or dinner",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      cookTime: "15 mins",
      servings: 4,
      difficulty: "Easy",
      category: "breakfast",
      rating: 4.8,
      ingredients: ["200g Pure Plant Tofu", "2 onions, chopped", "2 tomatoes, chopped", "Spices", "Oil"],
      steps: [
        "Crumble the tofu into small pieces",
        "Heat oil in a pan and sauté onions until golden",
        "Add tomatoes and spices, cook until soft",
        "Add crumbled tofu and mix well",
        "Cook for 5-7 minutes until flavors blend"
      ],
      tags: ["Protein Rich", "Indian", "Vegetarian", "Quick"]
    },
    {
      id: 2,
      name: "Tandoori Tofu Tikka",
      description: "Marinated and grilled tofu with authentic tandoori flavors",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      cookTime: "30 mins",
      servings: 4,
      difficulty: "Medium",
      category: "dinner",
      rating: 4.9,
      ingredients: ["250g Firm Pure Plant Tofu", "Yogurt", "Tandoori masala", "Garlic-ginger paste", "Bell peppers"],
      steps: [
        "Cut tofu into cubes and marinate with yogurt and spices",
        "Let it marinate for 20 minutes",
        "Thread onto skewers with vegetables",
        "Grill for 15 minutes, turning occasionally",
        "Serve hot with mint chutney"
      ],
      tags: ["Grilled", "Marinated", "Party Food", "High Protein"]
    },
    {
      id: 3,
      name: "Creamy Tofu Smoothie Bowl",
      description: "A nutritious and delicious breakfast bowl with silken tofu",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
      cookTime: "10 mins",
      servings: 2,
      difficulty: "Easy",
      category: "breakfast",
      rating: 4.7,
      ingredients: ["150g Silken Pure Plant Tofu", "Banana", "Berries", "Almond milk", "Honey", "Granola"],
      steps: [
        "Blend silken tofu with banana and almond milk",
        "Pour into bowls",
        "Top with fresh berries and granola",
        "Drizzle with honey",
        "Serve immediately"
      ],
      tags: ["Healthy", "Quick", "Breakfast", "Protein Rich"]
    },
    {
      id: 4,
      name: "Tofu Pad Thai",
      description: "Asian-inspired stir-fried noodles with crispy tofu",
      image: "https://images.unsplash.com/photo-1559314809-0f31657faf33?w=400&h=300&fit=crop",
      cookTime: "25 mins",
      servings: 3,
      difficulty: "Medium",
      category: "lunch",
      rating: 4.6,
      ingredients: ["200g Firm Pure Plant Tofu", "Rice noodles", "Bean sprouts", "Peanuts", "Lime", "Tamarind sauce"],
      steps: [
        "Soak rice noodles in hot water",
        "Cube and pan-fry tofu until golden",
        "Stir-fry vegetables in the same pan",
        "Add noodles and sauce, toss well",
        "Garnish with peanuts and lime"
      ],
      tags: ["Asian", "Stir-fry", "Noodles", "Fusion"]
    },
    {
      id: 5,
      name: "Chocolate Tofu Mousse",
      description: "Rich and creamy dessert made with silken tofu",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      cookTime: "15 mins",
      servings: 6,
      difficulty: "Easy",
      category: "desserts",
      rating: 4.5,
      ingredients: ["200g Silken Pure Plant Tofu", "Dark chocolate", "Maple syrup", "Vanilla", "Cocoa powder"],
      steps: [
        "Melt chocolate and let it cool slightly",
        "Blend tofu until smooth",
        "Add melted chocolate and sweeteners",
        "Blend until creamy and uniform",
        "Chill for 2 hours before serving"
      ],
      tags: ["Dessert", "Chocolate", "Healthy", "Vegan"]
    },
    {
      id: 6,
      name: "Tofu Biryani",
      description: "Aromatic rice dish with spiced tofu pieces",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=400&h=300&fit=crop",
      cookTime: "45 mins",
      servings: 6,
      difficulty: "Hard",
      category: "dinner",
      rating: 4.8,
      ingredients: ["300g Pure Plant Tofu", "Basmati rice", "Biryani masala", "Saffron", "Fried onions", "Mint"],
      steps: [
        "Marinate tofu cubes with biryani spices",
        "Partially cook rice with whole spices",
        "Layer rice and marinated tofu",
        "Cook on dum for 30 minutes",
        "Garnish with fried onions and mint"
      ],
      tags: ["Indian", "Rice", "Festive", "Aromatic"]
    },
    {
      id: 7,
      name: "Tofu Caesar Salad",
      description: "Fresh salad with crispy tofu croutons and creamy dressing",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      cookTime: "20 mins",
      servings: 4,
      difficulty: "Easy",
      category: "lunch",
      rating: 4.4,
      ingredients: ["150g Firm Pure Plant Tofu", "Romaine lettuce", "Parmesan", "Caesar dressing", "Croutons"],
      steps: [
        "Cut tofu into cubes and season",
        "Pan-fry until golden and crispy",
        "Wash and chop lettuce",
        "Toss with dressing and cheese",
        "Top with tofu croutons"
      ],
      tags: ["Salad", "Healthy", "Western", "Fresh"]
    },
    {
      id: 8,
      name: "Spicy Tofu Tacos",
      description: "Mexican-inspired tacos with seasoned tofu filling",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      cookTime: "20 mins",
      servings: 4,
      difficulty: "Easy",
      category: "snacks",
      rating: 4.7,
      ingredients: ["200g Pure Plant Tofu", "Taco shells", "Lettuce", "Tomatoes", "Avocado", "Mexican spices"],
      steps: [
        "Crumble tofu and season with Mexican spices",
        "Sauté until golden and crispy",
        "Warm taco shells",
        "Fill with tofu mixture",
        "Top with fresh vegetables"
      ],
      tags: ["Mexican", "Spicy", "Street Food", "Quick"]
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Delicious</span> Tofu Recipes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover amazing ways to cook with Pure Plant Tofu. From traditional Indian dishes 
            to international cuisine, explore recipes that make plant-based eating exciting and delicious.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <ChefHat className="text-primary" size={24} />
            <span className="text-lg">Over 50+ Tested Recipes</span>
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
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <CardHeader className="p-0 relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
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
                  <Badge className={`absolute top-4 left-4 ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </Badge>
                </CardHeader>

                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">{recipe.name}</CardTitle>
                  <CardDescription className="text-sm mb-4 line-clamp-2">
                    {recipe.description}
                  </CardDescription>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {recipe.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">View Recipe</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No recipes found</p>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect recipe for any meal or occasion
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <Card 
                key={category.id} 
                className="cursor-pointer hover:shadow-md transition-shadow text-center p-6"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChefHat className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {recipes.filter(r => r.category === category.id).length} recipes
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Get New Recipes Weekly
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive fresh, tested tofu recipes 
            delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipes;