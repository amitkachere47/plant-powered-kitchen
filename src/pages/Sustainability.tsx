import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Recycle, Droplets, Wind, Factory, Target, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Sustainability = () => {
  const impactStats = [
    { icon: <Leaf className="w-8 h-8 text-primary" />, value: "50,000", unit: "kg", label: "CO2 Saved Annually" },
    { icon: <Droplets className="w-8 h-8 text-primary" />, value: "1.2M", unit: "L", label: "Water Conserved" },
    { icon: <Recycle className="w-8 h-8 text-primary" />, value: "95%", unit: "%", label: "Recyclable Packaging" },
    { icon: <Factory className="w-8 h-8 text-primary" />, value: "100%", unit: "%", label: "Renewable Energy" }
  ];

  const sustainabilityGoals = [
    { title: "Carbon Neutral by 2024", progress: 95, description: "On track to achieve complete carbon neutrality" },
    { title: "Zero Waste Production", progress: 78, description: "Implementing circular economy principles" },
    { title: "100% Renewable Energy", progress: 100, description: "Fully powered by solar and wind energy" },
    { title: "Sustainable Packaging", progress: 90, description: "Transitioning to biodegradable materials" },
    { title: "Local Sourcing", progress: 85, description: "Supporting local farmers and reducing transport emissions" }
  ];

  const initiatives = [
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Regenerative Agriculture",
      description: "Partnering with farmers who use sustainable farming practices that restore soil health and increase biodiversity.",
      impact: "Support for 200+ farmers across 5 states"
    },
    {
      icon: <Recycle className="w-12 h-12 text-primary" />,
      title: "Circular Packaging",
      description: "Developing packaging that can be returned, reused, or composted, minimizing waste in the food system.",
      impact: "90% reduction in packaging waste"
    },
    {
      icon: <Droplets className="w-12 h-12 text-primary" />,
      title: "Water Conservation",
      description: "Implementing water-efficient processing techniques and rainwater harvesting systems.",
      impact: "60% less water than traditional protein production"
    },
    {
      icon: <Wind className="w-12 h-12 text-primary" />,
      title: "Clean Energy",
      description: "Operating our facilities entirely on renewable energy sources including solar and wind power.",
      impact: "100% renewable energy across all facilities"
    }
  ];

  const certifications = [
    { name: "Carbon Trust Certified", icon: "🌱" },
    { name: "B-Corp Certified", icon: "🏆" },
    { name: "ISO 14001", icon: "🌍" },
    { name: "LEED Gold Facility", icon: "🏢" },
    { name: "Cradle to Cradle", icon: "♻️" },
    { name: "Rainforest Alliance", icon: "🌿" }
  ];

  const comparisonData = [
    { metric: "Water Usage", traditional: "1000L", purePlant: "200L", savings: "80%" },
    { metric: "CO2 Emissions", traditional: "5.2kg", purePlant: "0.8kg", savings: "85%" },
    { metric: "Land Use", traditional: "2.5m²", purePlant: "0.4m²", savings: "84%" },
    { metric: "Energy", traditional: "25 MJ", purePlant: "4 MJ", savings: "84%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Building a <span className="text-primary">Sustainable</span> Future
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our commitment to the planet goes beyond making delicious plant-based food. 
              We're creating a positive impact on the environment, communities, and future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 text-sm">🌱 Carbon Neutral</Badge>
              <Badge className="px-4 py-2 text-sm">♻️ Zero Waste</Badge>
              <Badge className="px-4 py-2 text-sm">💧 Water Positive</Badge>
              <Badge className="px-4 py-2 text-sm">🌞 100% Renewable</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Environmental Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every Pure Plant product makes a difference. Here's how we're contributing to a healthier planet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                    <span className="text-lg text-muted-foreground ml-1">{stat.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">2024 Sustainability Goals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tracking our progress towards ambitious environmental targets
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {sustainabilityGoals.map((goal, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{goal.title}</h3>
                    <Badge variant={goal.progress === 100 ? "default" : "secondary"}>
                      {goal.progress}%
                    </Badge>
                  </div>
                  <Progress value={goal.progress} className="mb-3" />
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Green Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to minimize our environmental footprint
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="mb-4">{initiative.icon}</div>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {initiative.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <TrendingUp size={16} />
                    {initiative.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Plant vs. Animal Protein Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our tofu compares to traditional animal protein in environmental impact per 100g of protein
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {comparisonData.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.metric}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Traditional Protein</p>
                      <p className="text-xl font-bold text-red-600">{item.traditional}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pure Plant Tofu</p>
                      <p className="text-xl font-bold text-primary">{item.purePlant}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {item.savings} less impact
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Transparency */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Transparent Supply Chain
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We believe in complete transparency about where our ingredients come from 
                and how our products are made. Our supply chain is designed for sustainability at every step.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Local Farmer Partnership", description: "Direct relationships with certified organic farmers within 200km" },
                  { step: "2", title: "Sustainable Processing", description: "Solar-powered facility with zero waste production methods" },
                  { step: "3", title: "Eco-Friendly Packaging", description: "Biodegradable and recyclable materials only" },
                  { step: "4", title: "Carbon-Neutral Delivery", description: "Electric vehicles and optimized routes for minimal emissions" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                alt="Sustainable farming"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sustainability Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to sustainability is validated by leading certification bodies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="text-sm font-medium">{cert.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Commitments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our 2030 Commitments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking ahead, we're setting even more ambitious goals for the next decade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target className="w-8 h-8 text-primary" />, 
                title: "Climate Positive", 
                description: "Remove more CO2 from the atmosphere than we emit" 
              },
              { 
                icon: <Recycle className="w-8 h-8 text-primary" />, 
                title: "Regenerative Impact", 
                description: "Leave the environment better than we found it" 
              },
              { 
                icon: <Award className="w-8 h-8 text-primary" />, 
                title: "Industry Leadership", 
                description: "Set new standards for sustainable food production" 
              }
            ].map((commitment, index) => (
              <Card key={index} className="text-center p-8">
                <div className="mx-auto mb-4">{commitment.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Sustainability Journey
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every Pure Plant product you choose is a vote for a more sustainable future. 
            Together, we can make a difference for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg">Choose Sustainable</Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg">Read Our Impact Stories</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;