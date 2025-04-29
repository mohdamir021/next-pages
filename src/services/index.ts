
// Using normal function
type RequestMethodType = "post" | "get"
type RequestParams = Record<string, any>;

const baseURL = process.env.NEXT_PUBLIC_API_URL

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


function getFetchAPIObject () {
  return {
    get: (path: string, params?: Record<string, any>) => {
      const url = buildUrl(path, params);
      fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    },
    post: (path: string, body?: unknown, params?: Record<string, any>) => {
      const url = buildUrl(path, params);
      fetch(url, {
        method: 'post',
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }
}