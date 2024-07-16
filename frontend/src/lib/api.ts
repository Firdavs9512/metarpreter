import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (
    config.url?.includes("/api/dashboard") ||
    config.url?.includes("api/dashboard")
  ) {
    const token = localStorage.getItem("auth_token");

    config.headers.Authorization = token;
  }

  return config;
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    const { status, config } = error;

    // Check for 401 status and specific URL path
    if (status === 401 && config.url.includes("/api/dashboard")) {
      // Redirect to home page
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);
