"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

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
