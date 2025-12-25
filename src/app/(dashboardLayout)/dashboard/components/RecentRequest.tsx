/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileQuestion, MapPin } from "lucide-react";

const RecentRequest = ({ recentRequests }: { recentRequests: any[] }) => {
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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileQuestion className="h-5 w-5" />
          Recent Requests
        </CardTitle>
        <CardDescription>Your recent flat sharing requests</CardDescription>
      </CardHeader>
      <CardContent>
        {recentRequests?.length === 0 ? (
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
            {recentRequests?.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium hover:text-primary">
                      {request.flat.title}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-3">
                      <MapPin className="size-3 text-primary" />
                      {request.flat.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Requested on{" "}
                      {new Date(request?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
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
  );
};

export default RecentRequest;
