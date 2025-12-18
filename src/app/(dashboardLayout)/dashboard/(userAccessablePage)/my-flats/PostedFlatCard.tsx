"use client";
import { TFlat } from "@/components/landing/FeatueredFlat";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { Bed, DollarSign, Edit, MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { set } from "zod";
import CustomModal from "@/components/modal/CustomModal";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { deleteFlat } from "@/utils/actions/flatActions";
import { EditFlatForm } from "@/app/(dashboardLayout)/components/EditFlatForm";

const PostedFlatCard = ({ flat }: { flat: TFlat }) => {
  const [action, setAction] = useState("");
  const { id, imageUrls, title, description, rent, totalBedrooms, location } =
    flat;

  const handleEdit = (id: string) => {
    setAction("edit");
    toast.info(`Editing flat #${id}`);
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting flat...");
    setAction("delete");
    const res = await deleteFlat(id);
    if (!res?.success) {
      toast.error(`Failed to delete flat ${title}`, {
        id: toastId,
      });
      return;
    }
    toast.success(`Flat ${title} deleted successfully`, {
      id: toastId,
    });
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
      <CardContent className="p-2 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
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

        <div className="flex justify-center gap-3 pt-2">
          <EditFlatForm flat={flat} />

          <CustomModal>
            <DialogTrigger asChild>
              <Button className="flex-1" variant="destructive">
                <Trash2 className="" /> Delete
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Delete Flat</DialogTitle>
              </DialogHeader>
              <div>
                <h3 className="text-xl font-semibold">
                  Are you sure you want to delete this flat?
                </h3>
                <p className="text-muted-foreground my-4">
                  This action cannot be undone. This will permanently delete
                  your flat post.
                </p>
                <div className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={() => handleDelete(id)}
                      variant="destructive"
                    >
                      Delete
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </CustomModal>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostedFlatCard;
