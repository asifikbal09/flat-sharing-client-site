import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, MapPin, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const statusConfig = {
  PENDING: {
    label: "PENDING",
    icon: Clock,
    className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  },
  BOOKED: {
    label: "BOOKED",
    icon: CheckCircle,
    className: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  REJECTED: {
    label: "REJECTED",
    icon: XCircle,
    className: "bg-red-500/10 text-red-600 border-red-500/20",
  },
};

export type TFlatRequest = {
  id: string;
  flatId: string;
  userId: string;
  status: "PENDING" | "BOOKED" | "REJECTED";
  message: string;
  moveInDate: string;
  duration: string;
  numberOfPeople: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    role: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
  flat: {
    id: string;
    title: string;
    squareFeet: number;
    totalBedrooms: number;
    totalRooms: number;
    imageUrls: string[];
    utilitiesDescription: string;
    location: string;
    description: string;
    rent: number;
    availability: boolean;
    advanceAmount: number;
    createdAt: string;
    updatedAt: string;
    userId: string;
  };
};

const FlatRequestCard = ({ requests }: { requests: TFlatRequest[] }) => {
  console.log(requests);
  return (
    <div>
      {requests?.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">
              You haven{"'"}t made any requests yet
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {requests.map((request: TFlatRequest) => {
            const status = statusConfig[request?.status];
            const StatusIcon = status?.icon;

            return (
              <Card key={request.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 md:h-auto">
                      <Image
                        src={request.flat.imageUrls[0]}
                        width={200}
                        height={128}
                        alt={request.flat.location}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="">
                            <h3 className="text-lg font-semibold text-primary">{request.flat.title}</h3>
                            <div className="flex items-center gap-1.5 mb-1">
                              <MapPin className="h-4 w-4  text-muted-foreground" />
                              <span className="font-medium text-foreground">
                                {request.flat.location}
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className={status.className}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {status.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Requested on:{" "}
                          {new Date(request.createdAt).toLocaleDateString()}
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

export default FlatRequestCard;
