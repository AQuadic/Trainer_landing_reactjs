import Axios, { type InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  // Assume a browser environment (remove SSR/Next.js-specific logic)
  const token = Cookies.get("o-branchy-token");

  const pathname = (window.location && window.location.pathname) || "/";
  const language = pathname.includes("/ar")
    ? "ar"
    : pathname.includes("ar")
    ? "ar"
    : "en";

  const hostname = (window.location && window.location.hostname) || "";
  const isLocalHost =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    (hostname && hostname.includes("devtunnels.ms")) ||
    import.meta.env.MODE === "development";

  if (!config.headers) return config;

  // Only set Tenant-Id when on localhost/development
  if (isLocalHost) {
    config.headers["Tenant-Id"] =
      (import.meta.env.VITE_TENANT_ID as string)?.trim() || "1";
  }

  config.headers["Accept-Language"] = language;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = "application/json";

  return config;
}

// Get the base URL with fallback
const getBaseURL = () => {
  return "https://academy.obranchy.com/api";
};

export const axios = Axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // 10 second timeout
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle axios errors more specifically
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const data = error.response.data;

      console.log(`API Error ${status}:`, data);

      // Only treat 401/403 as auth errors, not network issues
      if (status === 401 || status === 403) {
        const authError = new Error("UNAUTHORIZED", { cause: error });
        return Promise.reject(authError);
      }

      // For other errors, preserve the response structure for proper error handling
      // Wrap the original error to maintain response data access
      const serverError = new Error("Server Error");
      Object.assign(serverError, { response: error.response });
      return Promise.reject(serverError);
    } else if (error.request) {
      // Network error - don't clear auth for network issues
      console.warn("Network error:", error.message);
      const networkError = new Error(`Network Error: ${error.message}`, {
        cause: error,
      });
      return Promise.reject(networkError);
    } else {
      // Something else happened
      console.error("Request setup error:", error.message);
      const setupError = new Error(`Request Setup Error: ${error.message}`, {
        cause: error,
      });
      return Promise.reject(setupError);
    }
  }
);
