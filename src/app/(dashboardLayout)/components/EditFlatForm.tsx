"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { X, Plus, Upload, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { addFlat, editFlat } from "@/utils/actions/flatActions";
import { TFlat } from "@/components/landing/FeatueredFlat";

const flatSchema = z
  .object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    squareFeet: z.number().int().min(1, "Square feet must be positive"),
    totalBedrooms: z.number().int().min(0, "Bedrooms cannot be negative"),
    totalRooms: z.number().int().min(1, "Must have at least 1 room"),
    utilitiesDescription: z.string().min(10, "Please describe utilities"),
    location: z.string().min(5, "Location must be at least 5 characters"),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters"),
    rent: z.number().min(1, "Rent must be positive"),
    availability: z.boolean().default(true),
    advanceAmount: z.number().min(0, "Advance amount cannot be negative"),
  })
  .strict();

export type FlatFormData = z.infer<typeof flatSchema>;

interface EditFlatFormProps {
  onSubmit?: (data: FlatFormData & { imageUrls: string[] }) => void;
}

export function EditFlatForm({ flat }: { flat: TFlat }) {
  const [open, setOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>(flat.imageUrls || []);
  const [newImageUrl, setNewImageUrl] = useState("");

  const form = useForm<FlatFormData>({
    defaultValues: {
      title: flat.title,
      squareFeet: flat.squareFeet,
      totalBedrooms: flat.totalBedrooms,
      totalRooms: flat.totalRooms,
      utilitiesDescription: flat.utilitiesDescription,
      location: flat.location,
      description: flat.description,
      rent: flat.rent,
      availability: flat.availability,
      advanceAmount: flat.advanceAmount,
    },
  });

  const handleAddImageUrl = () => {
    if (newImageUrl.trim()) {
      setImageUrls([...imageUrls, newImageUrl.trim()]);
      setNewImageUrl("");
    }
  };

  const handleRemoveImageUrl = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  const handleSubmit = async (data: FlatFormData) => {
    if (imageUrls.length === 0) {
      toast.error("Please add at least one image URL");
      return;
    }
    const flatData = {
      ...data,
      imageUrls,
    };
    console.log(flatData);
    const res = await editFlat(flatData, flat.id);
    if (res.success) {
      toast.success("Flat info updated successfully");
      form.reset();
      setOpen(false);
      setImageUrls([]);
    } else {
      toast.error("Failed to update flat info");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit className="h-4 w-4 mr-2" />
          Edit Flat
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Flat</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Cozy apartment in downtown"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="squareFeet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Square Feet</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Rent ($)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="totalBedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Bedrooms</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="totalRooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Rooms</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, New York, NY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your flat in detail..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="utilitiesDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Utilities Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Water, electricity, internet included..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="advanceAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Advance Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="3000" {...field} />
                  </FormControl>
                  <FormDescription>Security deposit required</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image URLs Section */}
            <div className="space-y-3">
              <FormLabel>Image URLs</FormLabel>
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddImageUrl();
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddImageUrl}
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              {imageUrls.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md text-sm"
                    >
                      <span className="max-w-[200px] truncate">{url}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveImageUrl(index)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {imageUrls.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Add at least one image URL
                </p>
              )}
            </div>

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Available</FormLabel>
                    <FormDescription>
                      Is this flat currently available for rent?
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Add Flat</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
