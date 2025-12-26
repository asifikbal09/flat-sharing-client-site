"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const requestStatusUpdate = async (
  requestId: string,
  newStatus: string
) => {
  const cookie = await cookies();
  const res = await fetch(
    `${process.env.BACKEND_LINK}/booking-requests/${requestId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookie.get("accessToken")?.value || ""}`,
      },
      body: JSON.stringify({ status: newStatus }),
    }
  );
  const data = await res.json();
  if (data.success) {
    revalidateTag("UserRequests");
  }
  return data;
};
