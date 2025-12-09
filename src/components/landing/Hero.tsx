import { Button } from "@/components/ui/button";
import { Search, MapPin, Users, ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2  w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 50,000+ users</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground" style={{ animationDelay: "0.1s" }}>
              Find Your
              <br />
              <span className="text-gradient">Perfect Flatmate</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8" style={{ animationDelay: "0.2s" }}>
              Connect with verified flatmates and discover your ideal living space. 
              Making shared living simple, safe, and social.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start  animate-fade-in-up">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all shadow-soft hover:shadow-glow text-base px-8 py-6 group">
                Browse Listings
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 text-base px-8 py-6">
                List Your Space
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "10K+", label: "Active Listings" },
                { value: "50K+", label: "Happy Users" },
                { value: "100+", label: "Cities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Search Card */}
          <div className="relative ">
            {/* Main Search Card */}
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border/50 relative z-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Find your perfect match</h3>
              
              <div className="space-y-4">
                {/* Location Input */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter city or neighborhood"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Budget Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                    <input
                      type="text"
                      placeholder="Min budget"
                      className="w-full pl-8 pr-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                    <input
                      type="text"
                      placeholder="Max budget"
                      className="w-full pl-8 pr-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground appearance-none cursor-pointer">
                    <option value="">Room type</option>
                    <option value="private">Private Room</option>
                    <option value="shared">Shared Room</option>
                    <option value="entire">Entire Place</option>
                  </select>
                </div>

                {/* Search Button */}
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all shadow-soft hover:shadow-glow py-6 text-base group">
                  <Search className="w-5 h-5 mr-2" />
                  Search Flats
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card border border-border/50 animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">120+ Matches</div>
                  <div className="text-xs text-muted-foreground">Near you</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card border border-border/50 animate-float-delayed hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-card" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">+500 joined today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
