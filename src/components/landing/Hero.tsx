"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, MapPin, Users, ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative  bg-gradient-hero pt-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              {/* <motion.div/> */}
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">
                Trusted by 50,000+ users
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              Find Your
              <br />
              <span className="text-gradient">Perfect Flatmate</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ animationDelay: "0.2s" }}
            >
              Connect with verified flatmates and discover your ideal living
              space. Making shared living simple, safe, and social.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start  animate-fade-in-up">
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
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
