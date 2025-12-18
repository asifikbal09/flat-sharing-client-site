"use server";
import { cookies } from "next/headers";

export async function flatRequest(payload: any) {
  const cookie = await cookies();
  const res = await fetch(`${process.env.BACKEND_LINK}/booking-applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie.get("accessToken")?.value || ""}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}
