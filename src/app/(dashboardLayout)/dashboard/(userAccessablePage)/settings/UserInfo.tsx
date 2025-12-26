/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { User, Mail, MapPin, Briefcase, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { updateUserProfile } from "@/utils/actions/userActions";

export type UserInfoFormData = {
  name: string;
  email: string;
  bio: string;
  profession: string;
  address: string;
};
const UserInfo = ({ user }: { user: any }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const form = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      bio: user?.bio,
      profession: user?.profession,
      address: user?.address,
    },
  });

  const handleSave = async (data: UserInfoFormData) => {
    setButtonDisabled(true);
    const toastId = toast.loading("Updating profile...");
    const updatedData = {
      name: data.name,
      profession: data.profession,
      address: data.address,
      bio: data.bio,
    };
    if (user === data) {
      toast.message("No changes made to save.", { id: toastId });
    }
    const res = await updateUserProfile(updatedData);
    if (res.success) {
      toast.success("Profile updated successfully.", { id: toastId });
      setIsEditing(false);
      setButtonDisabled(false);
    } else {
      toast.error("Failed to update profile. Please try again.", {
        id: toastId,
      });
      setButtonDisabled(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Profile Information
        </CardTitle>
        <CardDescription>Manage your account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{user?.name}</h3>
                <p className="text-muted-foreground">{user?.profession}</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="name"
                        className="flex items-center gap-2"
                      >
                        <User className="h-4 w-4" /> Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="email"
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} disabled={true} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="profession"
                        className="flex items-center gap-2"
                      >
                        <Briefcase className="h-4 w-4" /> Profession
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Profession"
                          {...field}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="address"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" /> Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Address"
                          {...field}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="bio"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" /> Bio
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Bio"
                        {...field}
                        disabled={!isEditing}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3 pt-4">
              {isEditing ? (
                <div>
                  <Button type="submit" disabled={buttonDisabled}>
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
