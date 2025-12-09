
import { Button } from "@/components/ui/button";
import { Home, Users, Shield, Heart, Target, Award } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We verify all listings and users to ensure a safe experience for everyone.",
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Building meaningful connections between flatmates that last beyond the lease.",
    },
    {
      icon: Target,
      title: "Perfect Matches",
      description: "Our smart matching helps you find compatible roommates effortlessly.",
    },
    {
      icon: Award,
      title: "Quality Listings",
      description: "Every property is curated to meet our high standards of comfort and value.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Tenants" },
    { value: "10K+", label: "Verified Listings" },
    { value: "98%", label: "Match Success" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              About Us
            </h1>
            <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Placeholder */}
            <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-card">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Home className="w-12 h-12 text-primary" />
                </div>
                <p className="text-muted-foreground">Your perfect home awaits</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                About Us Section
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FlatMate was founded with a simple mission: to make finding the perfect living 
                space and compatible roommates easier than ever. We understand that your home 
                is more than just four walls – its where life happens.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our platform connects thousands of people looking for rooms, flatmates, and 
                shared living experiences. Whether you are a student, young professional, or 
                anyone seeking a great place to live, we are here to help.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe everyone deserves a place they can truly call home. Our mission is to 
              create meaningful connections and make the journey of finding shared living spaces 
              as seamless and enjoyable as possible. Together, we are building communities, one 
              flatmate at a time.
            </p>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
