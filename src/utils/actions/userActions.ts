/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function updateUserProfile(profileData: any) {
  const cookie = await cookies();
  const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `${cookie.get("accessToken")?.value}`,
    },
    body: JSON.stringify(profileData),
  });
  const data = await res.json();
  if (data.success) {
    revalidateTag("profile-data");
  }

  return data;
}
