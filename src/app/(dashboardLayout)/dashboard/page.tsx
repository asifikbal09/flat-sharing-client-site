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
import RecentPost from "./components/RecentPost";
import { userInfo } from "@/utils/userInfo";
import RecentRequest from "./components/RecentRequest";

const recentRequests = [
  {
    id: 1,
    location: "Banani, Dhaka",
    status: "pending",
    createdAt: "2024-01-18",
  },
];

const UserDashboard = async () => {
  const cookie = await cookies();

  const user = await userInfo();

  const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
    cache: "no-store",
    headers: {
      Authorization: cookie.get("accessToken")?.value || "",
    },
  });
  const data = await res.json();
  console.log(data);

  const userData = data?.data;

  const response = await fetch(
    `${process.env.BACKEND_LINK}/flats?userId=${user?.id}`,
    {
      headers: {
        Authorization: cookie.get("accessToken")?.value || "",
      },
      cache: "no-store",
      next: { tags: ["PostedFlat"] },
    }
  );
  const flats = await response.json();

  const respon = await fetch(
    `${process.env.BACKEND_LINK}/booking-requests/user`,
    {
      headers: {
        Authorization: cookie.get("accessToken")?.value || "",
      },
      cache: "no-store",
      next: { tags: ["UserRequests"] },
    }
  );
  const requests = await respon.json();
  console.log(requests);

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <Card className="overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
        <CardContent className="relative pt-0">
          <div className="flex flex-col sm:flex-row gap-4 -mt-12">
            <div className="h-24 w-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center shadow-lg">
              {/* {!userData?.imageUrl ? ( */}
              {/* <Image
                  src={userData?.imageUrl}
                  alt="User Avatar"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                /> */}
              {/* ) : ( */}
              <User className="h-12 w-12 text-primary" />
              {/* )} */}
            </div>
            <div className="flex-1 pt-2 sm:pt-8">
              <h2 className="text-2xl font-bold text-foreground">
                {userData?.name}
              </h2>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Briefcase className="h-4 w-4" />
                {userData?.profession}
              </p>
            </div>
          </div>

          <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{userData?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="text-sm font-medium">{userData?.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 sm:col-span-2 lg:col-span-1">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Bio</p>
                <p className="text-sm font-medium">{userData?.bio}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts Section */}
      <RecentPost flats={flats?.data?.slice(0, 3)} />

      {/* Recent Requests Section */}
      <RecentRequest recentRequests={requests?.data?.slice(0, 3)} />
    </div>
  );
};

export default UserDashboard;
