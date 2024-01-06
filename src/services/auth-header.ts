import { validateToken } from "./token.validation";

export default function authHeader() {
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user && user.token) {
        const isValidToken = validateToken(user.token);
        if (isValidToken) return { "x-access-token": user.accessToken };
      }
    }
  } catch (error) {
    console.error("Error retrieving or parsing user from localStorage:", error);
  }

  return { "x-access-token": null };
}
