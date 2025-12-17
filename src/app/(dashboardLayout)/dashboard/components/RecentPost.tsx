import { TFlat } from "@/components/landing/FeatueredFlat";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Home, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const recentPosts = [
  {
    id: 1,
    location: "Gulshan, Dhaka",
    rent: 15000,
    bedrooms: 2,
    createdAt: "2024-01-15",
  },
];

const RecentPost = ({ flats }: { flats: TFlat[] }) => {
  console.log(flats);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          Recent Posts
        </CardTitle>
        <CardDescription>Your recently posted flats</CardDescription>
      </CardHeader>
      <CardContent>
        {flats?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Home className="h-8 w-8 text-muted-foreground" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-1">
              No Posts Yet
            </h4>
            <p className="text-muted-foreground text-sm max-w-sm">
              You havent posted any flats for sharing yet. Start by creating
              your first post!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {flats?.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="font-sm flex items-center text-muted-foreground">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      {post.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ${post.rent.toLocaleString()}/month • {post.totalBedrooms}{" "}
                      bedroom
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentPost;
