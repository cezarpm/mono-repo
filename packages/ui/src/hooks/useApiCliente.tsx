import { useMemo } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mono-repo-xnau.onrender.com",
  timeout: 5000,
});

export function useApiClient() {
  return useMemo(() => apiClient, []);
}
