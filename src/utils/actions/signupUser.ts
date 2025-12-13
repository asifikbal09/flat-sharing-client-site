"use server";
import { SignupFormData } from "@/app/(authLayout)/sign-up/components/SignUpForm";

export const signupUser = async (payload: SignupFormData) => {
  const res = await fetch(`${process.env.BACKEND_LINK}/register`, {
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