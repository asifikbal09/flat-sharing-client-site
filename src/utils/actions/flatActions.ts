"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { userInfo } from "../userInfo";
import { FlatFormData } from "@/app/(dashboardLayout)/components/AddFlatForm";

export async function deleteFlat(id: string) {
  const cookie = await cookies();
  const res = await fetch(`${process.env.BACKEND_LINK}/flats/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: cookie.get("accessToken")?.value || "",
    },
  });
  const data = await res.json();
  revalidateTag("PostedFlats");
  if (data.success === true) {
    return data;
  }
}

export async function addFlat(payload: FlatFormData & { imageUrls: string[] }) {
  console.log(payload);
  const cookie = await cookies();
  const user = await userInfo();
  const res = await fetch(`${process.env.BACKEND_LINK}/flats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: cookie.get("accessToken")?.value || "",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  revalidateTag("PostedFlats");
  revalidateTag("Flats");
  return data;
}
