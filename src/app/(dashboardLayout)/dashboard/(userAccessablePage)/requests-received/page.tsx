import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ReceivedRequestCard from "@/app/(dashboardLayout)/components/ReceivedRequestCard";
import { cookies } from "next/headers";

const mockReceivedRequests = [];

const FlatRequestsReceived = async () => {
  const cookie = await cookies();
  const res = await fetch(
    `${process.env.BACKEND_LINK}/booking-requests/user/flats`,
    {
      cache: "no-store",
      headers: {
        Authorization: `${cookie.get("accessToken")?.value || ""}`,
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Requests on My Flats</h2>
        <p className="text-muted-foreground">
          Manage requests from users who want to share your flats
        </p>
      </div>

      {data.data.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <User className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">
              No one has requested to share your flats yet
            </p>
          </CardContent>
        </Card>
      ) : (
        <ReceivedRequestCard requests={data.data} />
      )}
    </div>
  );
};

export default FlatRequestsReceived;
