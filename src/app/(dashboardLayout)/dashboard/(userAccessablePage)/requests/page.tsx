import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookie = await cookies();
  const res = await fetch(
    `${process.env.BACKEND_LINK}/booking-requests/user/flats`,
    {
      headers: {
        Authorization: cookie.get("accessToken")?.value || "",
      },
    }
  );

  const data = await res.json();
  console.log(data);
  const requests = data.data.reduce((acc: any[], curr: any) => {
    const booking = curr.booking;
    return [...acc, ...booking];
  }, []);
  console.log(requests);
  return <div>The Requests Page</div>;
};

export default page;
