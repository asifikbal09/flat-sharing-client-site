"use server";
import { cookies } from "next/headers";

export async function logOut() {
  try {
    const cookie = await cookies();
    cookie.delete("accessToken");
  } catch (error) {
    throw error;
  }
}
