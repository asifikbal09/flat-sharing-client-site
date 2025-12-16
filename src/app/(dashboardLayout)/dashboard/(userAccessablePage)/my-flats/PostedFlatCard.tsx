"use client";
import { TFlat } from "@/components/landing/FeatueredFlat";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Bed, DollarSign, Edit, MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PostedFlatCard = ({ flat }: { flat: TFlat }) => {
  const { id, imageUrls, title, description, rent, totalBedrooms, location } =
    flat;

  const handleEdit = (id: string) => {
    toast.info(`Editing flat #${id}`);
  };

  const handleDelete = (id: string) => {
    toast.error(`Flat #${id} deleted`);
  };
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={imageUrls[0]}
          alt={title}
          className="w-full h-full object-cover"
          fill
        />
        <Badge className="absolute top-2 right-2 bg-primary">Active</Badge>
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <p className="text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-primary font-semibold">
            <DollarSign className="h-4 w-4" />
            <span>{rent.toLocaleString()}/month</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Bed className="h-4 w-4" />
            <span>{totalBedrooms} bed</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => handleEdit(id)}
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="flex-1"
            onClick={() => handleDelete(id)}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostedFlatCard;
