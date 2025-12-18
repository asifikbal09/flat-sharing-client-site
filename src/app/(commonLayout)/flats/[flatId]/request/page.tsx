import { ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import Link from "next/link";
import FlatRequestForm from "./FlatRequestForm";
import { cookies } from "next/headers";

const FlatShareRequest = async ({ params }: { params: { flatId: string } }) => {
  const param = await params;
  const cookie = await cookies();
  const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
    cache: "no-store",
    headers: {
      Authorization: `${cookie.get("accessToken")?.value || ""}`,
    },
  });
  const { data: userProfile } = await res.json();
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Back Button */}
          <Button variant="ghost" size="sm" className="mb-6 gap-2" asChild>
            <Link href={`/flats/`}>
              <ArrowLeft className="h-4 w-4" />
              Back to flat details
            </Link>
          </Button>

          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Flat Share Request</CardTitle>
              <CardDescription>
                Fill in your details to express interest in sharing this flat
              </CardDescription>
            </CardHeader>
            <FlatRequestForm userProfile={userProfile} flatId={param.flatId} />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FlatShareRequest;
