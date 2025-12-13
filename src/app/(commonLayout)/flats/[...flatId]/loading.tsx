import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Images and Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Image Gallery */}
                <Skeleton className="w-full h-[400px] rounded-2xl mb-4" />

                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>About this Flat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-4/6" />
                  </CardContent>
                </Card>

                {/* Utilities */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-4/6" />
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
                        <Skeleton className="w-24 h-4" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-border/50">
                      <Skeleton className="w-24 h-4" />
                      <Skeleton className="w-16 h-4" />
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Skeleton className="h-5 w-5 text-primary" />
                        <div>
                          <Skeleton className="w-16 h-4" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Skeleton className="h-5 w-5 text-primary" />
                        <div>
                          <Skeleton className="w-16 h-4" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Skeleton className="h-5 w-5 text-primary" />
                        <div>
                          <Skeleton className="w-16 h-4" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Skeleton className="h-5 w-5 text-primary" />
                        <div>
                          <Skeleton className="w-16 h-4" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <Skeleton className="w-32 h-4 mb-1" />
                        <Skeleton className="w-48 h-4" />
                      </div>
                    </div>

                    <Separator />

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-2">
                      <Skeleton className="w-full h-12 rounded-lg" />
                      <Skeleton className="w-full h-12 rounded-lg" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default loading;
