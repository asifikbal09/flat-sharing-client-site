"use server";

import { LoginFormData } from "@/app/(authLayout)/login/components/LoginForm";

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
  return userInfo;
};
