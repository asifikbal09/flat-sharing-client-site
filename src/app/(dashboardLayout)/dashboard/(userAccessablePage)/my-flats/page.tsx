import { MapPin, Bed, DollarSign, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { toast } from "sonner";
import Image from "next/image";
import { cookies } from "next/headers";
import { userInfo } from "@/utils/userInfo";
import PostedFlatCard from "./PostedFlatCard";
import { TFlat } from "@/components/landing/FeatueredFlat";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const MyFlatPosts = async () => {
  const user = await userInfo();
  const cookie = await cookies();

  const res = await fetch(
    `${process.env.BACKEND_LINK}/flats?userId=${user?.id}`,
    {
      headers: {
        Authorization: cookie.get("accessToken")?.value || "",
      },
      cache: "no-store",
      next: { tags: ["PostedFlats"] },
    }
  );
  const data = await res.json();

  const postedFlats = data.data;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Flat Posts</h2>
          <p className="text-muted-foreground">
            Manage your posted flats for sharing
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>+ Add New Flat</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Add Flat</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {postedFlats.length === 0 ? (
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
          {postedFlats.map((flat: TFlat) => (
            <PostedFlatCard flat={flat} key={flat.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFlatPosts;
