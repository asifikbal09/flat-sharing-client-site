import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const AuthRouts = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  user: [/^\/dashboard$/, "my-flats", "my-requests", "setting", /^\/flats/],
  admin: [/^\/dashboard\/admin/],
};
type Role = keyof typeof roleBasedPrivateRoutes;
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;
  console.log("token", accessToken);
  if (!accessToken) {
    if (AuthRouts.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData = null;
  decodedData = jwtDecode(accessToken);
  const role = (decodedData?.role).toLowerCase();
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/flats/:flatId*", "/dashboard/:page*"],
};
