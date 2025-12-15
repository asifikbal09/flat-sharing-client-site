"use client";
import { Button } from "@/components/ui/button";
import { Badge, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type FlatCarouselProps = {
  imageUrls: string[];
  availability: boolean;
};

const FlatCarousel = ({ imageUrls, availability }: FlatCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <div className="space-y-4">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={imageUrls[currentImageIndex]}
          width={800}
          height={600}
          loader={() => imageUrls[currentImageIndex]}
          loading="lazy"
          alt={`Flat image ${currentImageIndex + 1}`}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />

        {/* Image Navigation */}
        {imageUrls.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-primary w-6"
                      : "bg-background/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Availability Badge */}
        {/* <Badge
          className={`absolute top-4 right-4 ${
            availability ? "bg-green-500/90" : "bg-red-500/90"
          }`}
        >
          {availability ? "Available" : "Not Available"}
        </Badge> */}
      </div>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-2">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative rounded-lg overflow-hidden aspect-video ${
              index === currentImageIndex
                ? "ring-2 ring-primary"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={url}
              alt={`Thumbnail ${index + 1}`}
              width={200}
              height={150}
              loader={() => url}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlatCarousel;
