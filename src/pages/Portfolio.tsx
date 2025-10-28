import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const projects = [
    {
      id: 1,
      title: "TechVision Logo & Brand Identity",
      category: "Brand Identity",
      description: "Complete brand identity package including logo design, color palette, typography system, and brand guidelines for a cutting-edge technology company.",
      image: portfolio1,
      tags: ["Logo Design", "Brand Guidelines", "Corporate Identity"],
    },
    {
      id: 2,
      title: "FreshBites Restaurant Branding",
      category: "Restaurant Branding",
      description: "Comprehensive branding solution featuring logo, menu design, packaging, and marketing materials for a modern fast-casual restaurant.",
      image: portfolio3,
      tags: ["Logo", "Menu Design", "Packaging"],
    },
    {
      id: 3,
      title: "StyleHub Social Media Campaign",
      category: "Social Media",
      description: "Complete social media design package with Instagram posts, stories, Facebook covers, and YouTube banners for a fashion brand.",
      image: portfolio2,
      tags: ["Social Media", "Digital Marketing", "Content Design"],
    },
    {
      id: 4,
      title: "Wellness Co. Premium Package",
      category: "Full Branding",
      description: "VIP branding package including logo, website design, business stationery, and complete marketing materials for a wellness startup.",
      image: portfolio4,
      tags: ["Full Branding", "Web Design", "Marketing"],
    },
    {
      id: 5,
      title: "Urban Eats Menu Design",
      category: "Print Design",
      description: "Multi-page menu design with custom illustrations, professional photography integration, and print-ready files for a trendy urban restaurant.",
      image: portfolio5,
      tags: ["Menu Design", "Print Design", "Food Photography"],
    },
    {
      id: 6,
      title: "EcoLife Product Packaging",
      category: "Packaging Design",
      description: "Sustainable and eye-catching packaging design for an eco-friendly product line, including labels, boxes, and promotional materials.",
      image: portfolio8,
      tags: ["Packaging", "Sustainable Design", "Product Design"],
    },
    {
      id: 7,
      title: "Fitness Pro Mobile App UI",
      category: "UI/UX Design",
      description: "Modern mobile app interface design with intuitive user experience, featuring custom icons, workout screens, and progress tracking.",
      image: portfolio9,
      tags: ["UI/UX", "Mobile App", "Interface Design"],
    },
    {
      id: 8,
      title: "Artisan Coffee Brand Identity",
      category: "Brand Identity",
      description: "Handcrafted brand identity for a specialty coffee roaster, including logo, packaging labels, cafe signage, and promotional materials.",
      image: portfolio3,
      tags: ["Logo", "Packaging", "Brand Identity"],
    },
    {
      id: 9,
      title: "Digital Agency Website Design",
      category: "Web Design",
      description: "Full website design with modern layout, interactive elements, portfolio showcase, and conversion-optimized landing pages.",
      image: portfolio7,
      tags: ["Web Design", "Landing Page", "Digital"],
    },
  ];

  const categories = ["All", "Brand Identity", "Social Media", "Web Design", "Print Design", "Packaging Design"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their brand identity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(6);
              }}
              className={`px-6 py-2 text-sm cursor-pointer transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            {hasMore 
              ? `Showing ${visibleCount} of ${filteredProjects.length} projects`
              : `Showing all ${filteredProjects.length} projects`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hasMore && (
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-all duration-300 font-medium"
              >
                Load More Projects
              </button>
            )}
            <a
              href="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-light transition-all duration-300 font-medium"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
