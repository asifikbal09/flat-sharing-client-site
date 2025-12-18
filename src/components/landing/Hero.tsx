import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-flatmates.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl " /> */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2  w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">
                Trusted by 50,000+ users
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6 ">
              Find Your
              <br />
              <span className="text-gradient">Perfect Flatmate</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 ">
              Connect with verified flatmates and discover your ideal living
              space. Making shared living simple, safe, and social.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start "
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-soft hover:shadow-glow text-base px-8 py-6 group"
              >
                Browse Listings
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 text-base px-8 py-6"
              >
                List Your Space
              </Button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 "
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { value: "10K+", label: "Active Listings" },
                { value: "50K+", label: "Happy Users" },
                { value: "100+", label: "Cities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative ">
            <div className="">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30">
                <Image
                  src={heroImage}
                  width={200}
                  height={200}
                  alt="Happy flatmates enjoying their cozy apartment"
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">
                      4.9/5
                    </div>
                    <div className="text-xs text-muted-foreground">
                      User Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-primary rounded-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
