import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">Q</span>
              </div>
              <span className="text-xl font-bold">
                QBrand <span className="text-accent">Studio</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Premium Digital Art & Logo Design Agency crafting exceptional brand identities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Logo Design</li>
              <li className="text-sm text-primary-foreground/80">Brand Identity</li>
              <li className="text-sm text-primary-foreground/80">Social Media Design</li>
              <li className="text-sm text-primary-foreground/80">Web Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail size={16} className="text-accent" />
                <span>hello@qbrandstudio.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin size={16} className="text-accent" />
                <span>New York, USA</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} QBrand Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
