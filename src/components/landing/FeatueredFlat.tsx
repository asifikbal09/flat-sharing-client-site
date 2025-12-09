import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, ArrowRight, Heart } from "lucide-react";

const flats = [
  {
    id: 1,
    title: "Modern Studio in Downtown",
    location: "Manhattan, New York",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    description: "Bright and airy studio with stunning city views. Perfect for young professionals.",
    price: 1200,
    bedrooms: 1,
    featured: true,
  },
  {
    id: 2,
    title: "Cozy Apartment Near Park",
    location: "Brooklyn, New York",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    description: "Charming 2-bedroom apartment with exposed brick and modern amenities.",
    price: 1800,
    bedrooms: 2,
    featured: false,
  },
  {
    id: 3,
    title: "Luxury Loft with Terrace",
    location: "Chelsea, New York",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    description: "Spacious loft featuring high ceilings, private terrace, and premium finishes.",
    price: 2500,
    bedrooms: 3,
    featured: true,
  },
  {
    id: 4,
    title: "Sunny Room in Shared Flat",
    location: "Williamsburg, Brooklyn",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    description: "Friendly flatmates, great location near subway. All utilities included.",
    price: 950,
    bedrooms: 1,
    featured: false,
  },
  {
    id: 5,
    title: "Artist's Haven with Garden",
    location: "Park Slope, Brooklyn",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    description: "Creative space with natural light, private garden access, and quiet neighborhood.",
    price: 1600,
    bedrooms: 2,
    featured: false,
  },
  {
    id: 6,
    title: "Penthouse with Skyline View",
    location: "Upper East Side, NY",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    description: "Stunning penthouse apartment with panoramic views and rooftop access.",
    price: 3200,
    bedrooms: 3,
    featured: true,
  },
];

const FeaturedFlats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Available Now
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Flats
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked flats perfect for sharing. Find your ideal living space today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flats.map((flat, index) => (
            <Card
              key={flat.id}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-500 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={flat.image}
                  alt={flat.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {flat.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-lg">
                    Featured
                  </Badge>
                )}
                
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-muted-foreground hover:text-primary transition-colors duration-200 shadow-md">
                  <Heart className="h-4 w-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button className="w-full bg-white/95 text-foreground hover:bg-white shadow-lg">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{flat.location}</span>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {flat.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {flat.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bed className="h-4 w-4" />
                    <span className="text-sm">{flat.bedrooms} {flat.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">${flat.price}</span>
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
            Browse All Flats
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlats;
