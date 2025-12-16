import { userInfo } from "@/utils/userInfo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tokenFromCookie = async () => {
  const user = await userInfo();
  console.log(user);
  return "lsdkfj";
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.BACKEND_LINK}`,
  credentials: "include",
  prepareHeaders: async (headers) => {
    const token = await tokenFromCookie();

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
