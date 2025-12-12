"use server";

import { LoginFormData } from "@/app/(authLayout)/login/components/LoginForm";
import { cookies } from "next/headers";

export const loginUser = async (payload: LoginFormData) => {
  const res = await fetch(`${process.env.BACKEND_LINK}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const userInfo = await res.json();
  const cookie = await cookies()
    cookie.set("accessToken", userInfo.data.token, { httpOnly: true, path: '/' });
  return userInfo;
};
