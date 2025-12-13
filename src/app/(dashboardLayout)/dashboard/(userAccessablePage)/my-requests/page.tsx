import { MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  },
  approved: {
    label: "Approved",
    icon: CheckCircle,
    className: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "bg-red-500/10 text-red-600 border-red-500/20",
  },
};

const MyFlatRequests = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Flat Requests</h2>
        <p className="text-muted-foreground">
          Track your requests to share flats
        </p>
      </div>

      {mockRequests.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">
              You havent made any requests yet
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {mockRequests.map((request) => {
            const status = statusConfig[request.status];
            const StatusIcon = status.icon;

            return (
              <Card key={request.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 md:h-auto">
                      <img
                        src={request.image}
                        alt={request.location}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium text-foreground">
                              {request.location}
                            </span>
                          </div>
                          <Badge variant="outline" className={status.className}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {status.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Requested on:{" "}
                          {new Date(request.requestedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyFlatRequests;
