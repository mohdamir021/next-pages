import axios from "axios";

export const apiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

// Add a request interceptor
apiAxios.interceptors.request.use(async function (config) {
  // add implementation

  // add implementation to get bearer token

  // bearer token
  // config.headers.Authorization = `Bearer ${token}`;

  return config
})