import { RequestInit } from "next/dist/server/web/spec-extension/request";

// Using normal function
type RequestMethodType = "post" | "get";
type RequestParams = Record<string, any>;

function getFetchAPIObject() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  // Helper to append query params to URL
  const buildUrl = (path: string, params?: Record<string, any>) => {
    const url = new URL(`${baseURL}${path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    return url.toString();
  };

  const methods = {
    get: async (
      path: string,
      params?: Record<string, any>,
      options?: RequestInit
    ) => {
      const url = buildUrl(path, params);
      const data = await fetch(url, {
        ...options,
        method: "get",
        headers: {
          ...options?.headers,
          "Content-Type": "application/json",
        },
      });
      return await data.json();
    },
    post: async (
      path: string,
      body?: unknown,
      params?: Record<string, any>,
      options?: RequestInit
    ) => {
      const url = buildUrl(path, params);
      const data = await fetch(url, {
        ...options,
        method: "post",
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          ...options?.headers,
          "Content-Type": "application/json",
        },
      });
      return await data.json();
    },
  };

  return {
    ...methods,
    getAuthToken: async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        throw Error("User is not logged in");
      }

      return token;
    },
  };
}

export const apiHandler = getFetchAPIObject();
