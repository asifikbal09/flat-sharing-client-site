import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type TFlat = {
  id: string;
  title: string;
  squareFeet: number;
  totalBedrooms: number;
  totalRooms: number;
  imageUrls: string[];
  utilitiesDescription: string;
  location: string;
  description: string;
  rent: number;
  availability: boolean;
  advanceAmount: number;
  createdAt: string;
  updatedAt: string;
};

const FeaturedFlats = async () => {
  const res = await fetch(`${process.env.BACKEND_LINK}/flats`, {
    cache: "default",
  });
  const { data: flats } = await res.json();
  console.log(flats);

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
            Discover handpicked flats perfect for sharing. Find your ideal
            living space today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flats.slice(0, 6).map((flat: TFlat, index: number) => (
            <Card
              key={flat.id}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-500 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={flat.imageUrls[0]}
                  alt={flat.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {true && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-lg">
                    Featured
                  </Badge>
                )}

                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-muted-foreground hover:text-primary transition-colors duration-200 shadow-md">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link href={`/flats/${flat.id}`}>
                    <Button className="w-full bg-white/95 text-foreground hover:bg-white shadow-lg">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
                    <span className="text-sm">
                      {flat.totalBedrooms}{" "}
                      {flat.totalBedrooms === 1 ? "Bedroom" : "Bedrooms"}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      ${flat.rent.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="group border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            Browse All Flats
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlats;
