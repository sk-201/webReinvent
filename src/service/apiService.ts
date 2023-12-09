import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "https://reqres.in/api";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const authService = {
  login: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<any>> => {
    try {
      const response = await apiService.post("/login", { email, password });
      return response;
    } catch (error) {
      alert("Please check your credentials");
      throw error;
    }
  },
  register: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<any>> => {
    try {
      const response = await apiService.post("/register", { email, password });
      return response;
    } catch (error) {
      alert("Please check your credentials");

      throw error;
    }
  },
};
