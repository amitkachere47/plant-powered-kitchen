import { Leaf, FlaskConical, Dumbbell, Snowflake, MapPin } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Vegan Friendly",
    description: "100% Plant-based"
  },
  {
    icon: FlaskConical,
    title: "Preservative-Free",
    description: "No artificial additives"
  },
  {
    icon: Dumbbell,
    title: "High Protein",
    description: "Rich in plant protein"
  },
  {
    icon: Snowflake,
    title: "3 Weeks Shelf Life",
    description: "Keep refrigerated"
  },
  {
    icon: MapPin,
    title: "Made in India",
    description: "Locally sourced"
  }
];

const FeaturesStrip = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-semibold text-lg font-poppins">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;