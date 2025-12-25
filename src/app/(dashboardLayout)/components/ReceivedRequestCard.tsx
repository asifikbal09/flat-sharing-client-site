"use client";
import React from "react";

import {
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Calendar,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

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

type ReceivedRequestCardProps = {
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
    role: "USER" | "ADMIN";
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

const ReceivedRequestCard = ({
  requests,
}: {
  requests: ReceivedRequestCardProps[];
}) => {
  console.log(requests);
  const handleApprove = (id: string) => {};

  const handleReject = (id: string) => {};

  return (
    <div className="space-y-4">
      {requests.map((request) => {
        const status = statusConfig[request?.status];
        const StatusIcon = status.icon;

        return (
          <Card key={request.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Flat Image */}
                <div className="lg:w-80 h-40 lg:h-auto shrink-0">
                  <Image
                    src={request.flat.imageUrls[0]}
                    alt={request.flat.title}
                    width={250}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Request Details */}
                <div className="flex-1 p-4 flex flex-col gap-4">
                  {/* Header with flat location and status */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium text-foreground">
                        {request.flat.location}
                      </span>
                    </div>
                    <Badge variant="outline" className={status.className}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {status.label}
                    </Badge>
                  </div>

                  {/* Requester Info */}
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={""} alt={request.user.email} />
                      <AvatarFallback>
                        {request.user.email.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{request.user.email}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span>{request.user.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-sm text-muted-foreground italic">
                    {`"${request.message}"`}
                  </p>

                  {/* Footer with date and actions */}
                  <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        Requested on:{" "}
                        {new Date(request.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    {request.status === "PENDING" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleApprove(request.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ReceivedRequestCard;
