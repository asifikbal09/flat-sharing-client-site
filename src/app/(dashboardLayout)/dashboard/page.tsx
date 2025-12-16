import {
  User,
  Mail,
  MapPin,
  Briefcase,
  FileText,
  Home,
  Clock,
  FileQuestion,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cookies } from "next/headers";
import Image from "next/image";

// Mock data - replace with real data later
const recentPosts = [
  {
    id: 1,
    location: "Gulshan, Dhaka",
    rent: 15000,
    bedrooms: 2,
    createdAt: "2024-01-15",
  },
];

const recentRequests = [
  {
    id: 1,
    location: "Banani, Dhaka",
    status: "pending",
    createdAt: "2024-01-18",
  },
];

const UserDashboard = async () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "rejected":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    }
  };
  const cookie = await cookies();

  const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
    cache: "no-store",
    headers: {
      Authorization: cookie.get("accessToken")?.value || "",
    },
  });
  const data = await res.json();

  const userData = data.data;
  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <Card className="overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
        <CardContent className="relative pt-0">
          <div className="flex flex-col sm:flex-row gap-4 -mt-12">
            <div className="h-24 w-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center shadow-lg">
              {!userData.imageUrl ? (
                <Image
                  src={userData.imageUrl}
                  alt="User Avatar"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <User className="h-12 w-12 text-primary" />
              )}
            </div>
            <div className="flex-1 pt-2 sm:pt-8">
              <h2 className="text-2xl font-bold text-foreground">
                {userData.name}
              </h2>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Briefcase className="h-4 w-4" />
                {userData.profession}
              </p>
            </div>
          </div>

          <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{userData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="text-sm font-medium">{userData.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 sm:col-span-2 lg:col-span-1">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Bio</p>
                <p className="text-sm font-medium">{userData.bio}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Recent Posts
          </CardTitle>
          <CardDescription>Your recently posted flats</CardDescription>
        </CardHeader>
        <CardContent>
          {recentPosts.length === 0 ? (
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
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{post.location}</p>
                      <p className="text-sm text-muted-foreground">
                        ৳{post.rent.toLocaleString()}/month • {post.bedrooms}{" "}
                        bedroom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {post.createdAt}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Requests Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileQuestion className="h-5 w-5" />
            Recent Requests
          </CardTitle>
          <CardDescription>Your recent flat sharing requests</CardDescription>
        </CardHeader>
        <CardContent>
          {recentRequests.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <FileQuestion className="h-8 w-8 text-muted-foreground" />
              </div>
              <h4 className="text-lg font-medium text-foreground mb-1">
                No Requests Yet
              </h4>
              <p className="text-muted-foreground text-sm max-w-sm">
                You havent made any flat sharing requests yet. Browse available
                flats and send a request!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{request.location}</p>
                      <p className="text-sm text-muted-foreground">
                        Requested on {request.createdAt}
                      </p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(request.status)}>
                    {request.status.charAt(0).toUpperCase() +
                      request.status.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
