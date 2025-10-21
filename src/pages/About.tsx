import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, Zap, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality designs.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to create exceptional brand experiences.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends, bringing fresh and creative solutions to our clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to bring their vision to life.",
    },
  ];

  const stats = [
    { icon: Users, number: "250+", label: "Happy Clients" },
    { icon: Award, number: "500+", label: "Projects Completed" },
    { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
    { icon: Target, number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-accent">QBrand Studio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premium digital design agency dedicated to creating exceptional brand identities that stand out.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At QBrand Studio, we believe that every business deserves a memorable brand identity. Our mission is to
              empower businesses of all sizes with professional, creative design solutions that help them stand out in
              today's competitive market.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We combine artistic creativity with strategic thinking to deliver designs that not only look stunning but
              also drive real business results. From startups to established enterprises, we're passionate about helping
              our clients succeed through exceptional design.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We envision a world where every business has access to world-class design services, regardless of their
              size or budget. Our goal is to democratize premium design and make it accessible to entrepreneurs and
              businesses worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Through continuous innovation, dedication to excellence, and unwavering commitment to our clients, we aim
              to become the go-to design partner for businesses looking to elevate their brand presence and create
              lasting impressions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our <span className="text-accent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our <span className="text-accent">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target audience.",
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates initial concepts based on your requirements.",
              },
              {
                step: "03",
                title: "Refinement",
                description: "We work with you to perfect the design through revisions.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "You receive all final files and full commercial rights.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary for your brand.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-background text-foreground rounded-lg hover:bg-background/90 hover:scale-105 transition-all duration-300 font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
