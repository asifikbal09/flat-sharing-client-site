"use client";
import { MapPin, Bed, DollarSign, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Image from "next/image";

const mockFlats = [
  {
    id: 1,
    location: "Gulshan, Dhaka",
    description:
      "Modern 2-bedroom apartment with balcony and city view. Fully furnished with AC.",
    rent: 25000,
    bedrooms: 2,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    location: "Banani, Dhaka",
    description:
      "Spacious 3-bedroom flat near DOHS. Great for families or professionals.",
    rent: 35000,
    bedrooms: 3,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    location: "Dhanmondi, Dhaka",
    description:
      "Cozy 1-bedroom studio apartment. Perfect for students or singles.",
    rent: 15000,
    bedrooms: 1,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
  },
];

const MyFlatPosts = () => {
  const handleEdit = (id: number) => {
    toast.info(`Editing flat #${id}`);
  };

  const handleDelete = (id: number) => {
    toast.error(`Flat #${id} deleted`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Flat Posts</h2>
          <p className="text-muted-foreground">
            Manage your posted flats for sharing
          </p>
        </div>
        <Button>+ Add New Flat</Button>
      </div>

      {mockFlats.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">
              You haven{`'`}t posted any flats yet
            </p>
            <Button>Post Your First Flat</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockFlats.map((flat) => (
            <Card key={flat.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={flat.image}
                  alt={flat.location}
                  className="w-full h-full object-cover"
                  fill
                />
                <Badge className="absolute top-2 right-2 bg-primary">
                  Active
                </Badge>
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{flat.location}</span>
                </div>

                <p className="text-sm line-clamp-2">{flat.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>৳{flat.rent.toLocaleString()}/month</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Bed className="h-4 w-4" />
                    <span>{flat.bedrooms} bed</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEdit(flat.id)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDelete(flat.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFlatPosts;
