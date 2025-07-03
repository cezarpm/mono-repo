import { useMemo } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export function useApiClient() {
  return useMemo(() => apiClient, []);
}
