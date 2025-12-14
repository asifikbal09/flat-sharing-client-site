import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FlatCard from "./FlatCard";

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
            <FlatCard key={flat.id} flat={flat} index={index} />
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
