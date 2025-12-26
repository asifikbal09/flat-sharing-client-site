import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserInfo from "./UserInfo";
import { cookies } from "next/headers";

const Settings = async () => {
  const cookie = await cookies();

  const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
    next: {
      tags: ["profile-data"],
    },
    headers: {
      authorization: `${cookie.get("accessToken")?.value}`,
    },
  });

  const { data: user } = await res.json();
  console.log(user);

  return (
    <div className="space-y-6">
      <UserInfo user={user} />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security
          </CardTitle>
          <CardDescription>Manage your password</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Change Password</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
