import axios from "axios";
import { BASE_URL } from "../ngrokurl";

export const register = (email: string, password: string) => {
  return axios.post(`${BASE_URL}signup`, {
    email,
    password,
  });
};

export const login = async (email: string, password: string, role: string) => {
  console.log(BASE_URL);
  const response = await axios.post(`${BASE_URL}auth`, {
    email,
    password,
    role,
  });
  if (response.data.token && role === "user") {
    localStorage.setItem("user", JSON.stringify(response.data));
  } else if (response.data.token && role === "admin")
    localStorage.setItem("admin", JSON.stringify(response.data));

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
