import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ArrowRight, Badge, Bed, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TFlat } from "./FeatueredFlat";
type FlatCardProps = {
  flat: TFlat;
  index: number;
};

const FlatCard = ({ flat, index }: FlatCardProps) => {
  console.log(flat);
  const { imageUrls, title, description, rent, totalBedrooms, location } = flat;

  return (
    <Card
      className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-500 bg-card animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={imageUrls[0]}
          alt={title}
          width={800}
          height={600}
          loading="lazy"
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
          <span className="text-sm">{location}</span>
        </div>

        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <p className="text-xs text-muted-foreground mb-3">Posted by Admin</p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bed className="h-4 w-4" />
            <span className="text-sm">
              {totalBedrooms} {totalBedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </span>
          </div>

          <div className="text-right">
            <span className="text-2xl font-bold text-primary">
              ${rent.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">/mo</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlatCard;
