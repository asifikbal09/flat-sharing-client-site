import {
  ArrowLeft,
  MapPin,
  Bed,
  Home,
  SquareStack,
  Calendar,
  IndianRupee,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import FlatCarousel from "./FlatCarousel";

// Mock data for a single flat (matching the Prisma model)
const mockFlat = {
  id: "1",
  squareFeet: 1200,
  totalBedrooms: 2,
  totalRooms: 4,
  imageUrls: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  ],
  utilitiesDescription:
    "Electricity and water included. High-speed WiFi available. Gas connection for cooking. 24/7 security with CCTV surveillance.",
  location: "Koramangala 5th Block, Bangalore, Karnataka 560095",
  description:
    "Beautiful and spacious 2BHK apartment in the heart of Koramangala. This fully furnished flat features modern amenities, a well-equipped kitchen, and a cozy living area. Perfect for working professionals or small families. Located close to major IT parks, shopping centers, and public transportation. The apartment receives ample natural light and has excellent ventilation.",
  rent: 25000,
  availability: true,
  advanceAmount: 50000,
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date("2024-01-20"),
};

const FlatDetails = () => {
  const id = mockFlat.id;

  const flat = mockFlat;

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" size="sm" className="mb-6 gap-2" asChild>
            <Link href="/flats">
              <ArrowLeft className="h-4 w-4" />
              Back to listings
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <FlatCarousel
                imageUrls={flat.imageUrls}
                availability={flat.availability}
              />

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About this Flat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {flat.description}
                  </p>
                </CardContent>
              </Card>

              {/* Utilities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Utilities & Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {flat.utilitiesDescription}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Pricing and Quick Info */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Monthly Rent
                      </p>
                      <p className="text-3xl font-bold text-foreground flex items-center">
                        <IndianRupee className="h-6 w-6" />
                        {flat.rent.toLocaleString()}
                      </p>
                    </div>
                    {flat.availability ? (
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    ) : (
                      <XCircle className="h-8 w-8 text-destructive" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">
                      Advance Amount
                    </span>
                    <span className="font-semibold">
                      ₹{flat.advanceAmount.toLocaleString()}
                    </span>
                  </div>

                  <Separator />

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Bed className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Bedrooms
                        </p>
                        <p className="font-semibold">{flat.totalBedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <SquareStack className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Total Rooms
                        </p>
                        <p className="font-semibold">{flat.totalRooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Home className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Area</p>
                        <p className="font-semibold">{flat.squareFeet} sq.ft</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Posted</p>
                        <p className="font-semibold text-xs">
                          {flat.createdAt.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium text-sm">{flat.location}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <Button
                      className="w-full bg-gradient-primary gap-2"
                      size="lg"
                      asChild
                    >
                      <Link href={`/flats/${id}/request`}>
                        <MessageSquare className="h-4 w-4" />
                        Request Flat Share
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      size="lg"
                    >
                      <Phone className="h-4 w-4" />
                      Contact Owner
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlatDetails;
