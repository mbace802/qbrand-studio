import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Share2, Briefcase, Monitor, Star } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Palette,
      title: "Logo & Brand Identity",
      description: "Professional logo design and complete brand identity packages",
      services: [
        { name: "Basic Logo Package", price: "$299", features: ["3 initial concepts", "2 revisions", "High-res files"] },
        { name: "Standard Logo Package", price: "$499", features: ["5 concepts", "Unlimited revisions", "Source files", "Brand guidelines"] },
        { name: "Premium Logo Package", price: "$799", features: ["7 concepts", "Unlimited revisions", "Complete file package", "Brand style guide"] },
        { name: "Full Brand Identity", price: "$1,499", features: ["Logo design", "Color palette", "Typography", "Brand guidelines", "Stationery design"] },
        { name: "Rebranding Package", price: "$1,999", features: ["Complete brand refresh", "Logo redesign", "Updated guidelines", "Marketing materials"] },
      ],
    },
    {
      icon: Share2,
      title: "Social Media & Online Presence",
      description: "Eye-catching designs for all your social media platforms",
      services: [
        { name: "Social Media Kit", price: "$399", features: ["10 post templates", "Profile & cover images", "Story templates"] },
        { name: "Extended Social Kit", price: "$599", features: ["20 templates", "All platform covers", "Highlight covers", "Ad templates"] },
        { name: "Animated Logo", price: "$299", features: ["3-5 second animation", "Multiple formats", "Social media ready"] },
        { name: "YouTube/Instagram Banners", price: "$199", features: ["Channel art", "Profile banners", "Multiple sizes"] },
        { name: "Complete Social Package", price: "$999", features: ["50+ templates", "All platforms", "Animated content", "Monthly updates"] },
      ],
    },
    {
      icon: Briefcase,
      title: "Business & Marketing Materials",
      description: "Professional print and digital marketing designs",
      services: [
        { name: "Single-Page Menu Design", price: "$249", features: ["Professional layout", "2 revisions", "Print-ready files"] },
        { name: "Multi-Page Menu Design", price: "$499", features: ["Up to 8 pages", "Custom layout", "Unlimited revisions"] },
        { name: "Flyers & Posters", price: "$199", features: ["Custom design", "Print-ready", "Multiple sizes"] },
        { name: "Packaging Design", price: "$699", features: ["Product packaging", "Label design", "3D mockups"] },
        { name: "Business Card Design", price: "$149", features: ["Both sides designed", "Multiple concepts", "Print-ready"] },
      ],
    },
    {
      icon: Monitor,
      title: "Website & Digital Presence",
      description: "Modern website designs and digital assets",
      services: [
        { name: "Landing Page Design", price: "$799", features: ["Single page", "Responsive design", "Modern UI/UX"] },
        { name: "Full Website UI/UX", price: "$1,999", features: ["Up to 10 pages", "Responsive design", "Interactive prototype"] },
        { name: "E-commerce Store Design", price: "$2,999", features: ["Product pages", "Cart design", "Checkout flow", "Admin panel"] },
        { name: "Web Banners & Ads", price: "$299", features: ["Multiple sizes", "Animated options", "Conversion-focused"] },
      ],
    },
    {
      icon: Star,
      title: "Premium & Bundled Services",
      description: "Complete branding solutions and subscription plans",
      services: [
        { name: "Starter Branding Package", price: "$1,299", features: ["Logo design", "Business card", "Letterhead", "Social media kit"] },
        { name: "Standard Branding Package", price: "$2,499", features: ["Full brand identity", "Marketing materials", "Website design", "Social media"] },
        { name: "Premium Branding Package", price: "$4,999", features: ["Complete brand system", "Website development", "Marketing campaign", "Video content"] },
        { name: "VIP Subscription", price: "$999/mo", features: ["Unlimited design requests", "24/7 priority support", "Fast turnaround", "Dedicated designer"] },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From logo design to complete brand identity packages, we offer comprehensive design solutions for businesses of all sizes.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
                  >
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span className="text-lg">{service.name}</span>
                        <span className="text-2xl font-bold text-accent">{service.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary-light text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                      >
                        <Link to="/contact">
                          Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We can create a tailored solution that fits your specific needs and budget.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">
              Contact Us for Custom Quote <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
