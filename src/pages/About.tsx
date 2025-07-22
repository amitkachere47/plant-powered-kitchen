import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Users, Award, Factory, Truck, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "2020", title: "Foundation", description: "KalāJayā founded with a vision for sustainable living" },
    { year: "2021", title: "Research & Development", description: "Started developing plant-based protein alternatives" },
    { year: "2022", title: "First Product Launch", description: "Launched Pure Plant Tofu with overwhelming response" },
    { year: "2023", title: "Expansion", description: "Expanded to 50+ cities across India" },
    { year: "2024", title: "Sustainability Goals", description: "Achieved 100% sustainable packaging and carbon neutrality" }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainability",
      description: "We believe in protecting our planet through sustainable practices and eco-friendly production methods."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Health & Wellness",
      description: "Committed to providing nutritious, wholesome food that supports a healthy lifestyle for everyone."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description: "Building a community of conscious consumers who care about their health and environmental impact."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "Never compromising on quality, we ensure every product meets the highest standards of purity and taste."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Arjun Mehta",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "15+ years in food technology and sustainable agriculture"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Expert in supply chain management and quality control"
    },
    {
      name: "Rajesh Kumar",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Innovation leader in plant-based food processing"
    },
    {
      name: "Dr. Meera Patel",
      role: "Head of R&D",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Nutrition scientist with focus on plant-based proteins"
    }
  ];

  const certifications = [
    "FSSAI Certified",
    "ISO 22000:2018",
    "Vegan Society Certified",
    "Non-GMO Project Verified",
    "Organic Certified",
    "Carbon Neutral"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Rooted in creativity and health, KalāJayā is on a mission to empower families 
              to embrace sustainable, plant-based lifestyles through handcrafted, pure products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 text-sm">🌱 100% Plant-Based</Badge>
              <Badge className="px-4 py-2 text-sm">🏭 Made in India</Badge>
              <Badge className="px-4 py-2 text-sm">🌍 Sustainably Sourced</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Our Mission"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To make plant-based nutrition accessible, delicious, and sustainable for every Indian household. 
                  We believe that healthy living shouldn't compromise on taste or convenience.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become India's most trusted plant-based food brand, creating a positive impact on 
                  personal health, animal welfare, and environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make and shape the way we create products for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to a movement that's changing how India thinks about plant-based nutrition.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals working together to create a healthier, more sustainable future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <CardDescription className="text-sm">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                From Farm to Your Table
              </h2>
              <p className="text-muted-foreground text-lg">
                Our production process ensures the highest quality and purity at every step, 
                from sourcing the finest soybeans to delivering fresh products to your doorstep.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Globe className="w-6 h-6 text-primary" />, text: "Locally sourced non-GMO soybeans" },
                  { icon: <Factory className="w-6 h-6 text-primary" />, text: "State-of-the-art hygienic processing facility" },
                  { icon: <Award className="w-6 h-6 text-primary" />, text: "Rigorous quality control at every stage" },
                  { icon: <Truck className="w-6 h-6 text-primary" />, text: "Cold chain delivery to maintain freshness" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {step.icon}
                    <span className="text-foreground">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Production Process"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and sustainability is validated by leading certification bodies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-6 py-3 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the taste and nutrition of our handcrafted plant-based products. 
            Start your healthy living journey with Pure Plant today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg">Shop Our Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;