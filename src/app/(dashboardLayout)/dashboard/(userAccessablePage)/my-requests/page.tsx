import { MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FlatRequestCard from "@/app/(dashboardLayout)/components/FlatRequestCard";
import { cookies } from "next/headers";

type RequestStatus = "pending" | "approved" | "rejected";

const mockRequests = [
  {
    id: 1,
    location: "Uttara, Dhaka",
    status: "pending" as RequestStatus,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    requestedDate: "2024-01-15",
  },
  {
    id: 2,
    location: "Mirpur, Dhaka",
    status: "approved" as RequestStatus,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
    requestedDate: "2024-01-10",
  },
  {
    id: 3,
    location: "Mohammadpur, Dhaka",
    status: "rejected" as RequestStatus,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    requestedDate: "2024-01-08",
  },
];

const MyFlatRequests = async () => {
  const cookie = await cookies();
  const response = await fetch(
    `${process.env.BACKEND_LINK}/booking-requests/user`,
    {
      headers: {
        Authorization: cookie.get("accessToken")?.value || "",
      },
      cache: "no-store",
      next: { tags: ["UserRequests"] },
    }
  );
  const requests = await response.json();
  console.log(requests);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Flat Requests</h2>
        <p className="text-muted-foreground">
          Track your requests to share flats
        </p>
      </div>

      <FlatRequestCard requests={requests.data} />
    </div>
  );
};

export default MyFlatRequests;
