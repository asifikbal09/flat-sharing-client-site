import { jwtDecode } from "jwt-decode";

export const getUser = async () => {
    const token = localStorage.getItem("access-token");
    if (!token) {
        return null;
    }
    const decodedInfo = jwtDecode(token);
const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${token}`,
  },
  cache: "no-store",
});

const userInfo = await res.json();
    return userInfo;
}