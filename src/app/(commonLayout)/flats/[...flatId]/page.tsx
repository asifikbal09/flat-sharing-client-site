import {
  ArrowLeft,
  MapPin,
  Bed,
  Home,
  SquareStack,
  Calendar,
  CheckCircle,
  XCircle,
  Zap,
  Phone,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import FlatCarousel from "./FlatCarousel";

type TParams = {
  params: { flatId: string };
};

const FlatDetails = async ({ params }: TParams) => {
  const param = await params;
  const res = await fetch(`${process.env.BACKEND_LINK}/flats/${param.flatId}`, {
    cache: "no-store",
  });
  const { data: flat } = await res.json();

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
            <div className="lg:col-span-2 space-y-6">
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
                        <DollarSign className="h-6 w-6" />
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
                      ${flat.advanceAmount.toLocaleString()}
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
                          {new Date(flat.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
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
                      <Link href={`/flats/${flat.id}/request`}>
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
