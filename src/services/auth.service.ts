import axios from "axios";

const API_URL = "http://localhost:8000/auth";

export const register = (email: string, password: string) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

export const login = async (email: string, password: string, role: string) => {
  const response = await axios.post(API_URL, {
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
