import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/e509dec7-985e-4fe8-9bed-bc2e20e96976.png" 
              alt="Pure Plant Logo" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm">
              Handcrafted with care. Powered by plants. 
              100% vegan food products for a healthier tomorrow.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-poppins">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/recipes" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Recipes
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-poppins">Products</h3>
            <div className="space-y-2">
              <Link to="/products/tofu" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Tofu - Soya Paneer
              </Link>
              <span className="block text-primary-foreground/60 text-sm">More products coming soon...</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-poppins">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">hello@pureplant.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Factory Address<br />
                  [Location details]
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Pure Plant by KalāJayā. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;