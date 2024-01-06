import { useJwt } from "react-jwt";

export function validateToken(token: string) {
  const { isExpired } = useJwt(token);

  try {
    return !isExpired;
  } catch (error) {
    console.error("Invalid token");
    return null;
  }
}
