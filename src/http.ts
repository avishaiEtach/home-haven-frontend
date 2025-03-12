import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { routesPath } from "./routes";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? (process.env.REACT_PRODUCTION_PATH as string)
    : "//localhost:8080";

const axios: AxiosInstance = Axios.create({
  withCredentials: true, // This ensures that cookies are sent with each request
});
export const http = {
  get(endpoint: string, data?: any): Promise<any> {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint: string, data: any): Promise<any> {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint: string, data: any): Promise<any> {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint: string, data?: any): Promise<any> {
    return ajax(endpoint, "DELETE", data);
  },
};

async function ajax(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data: any = null
): Promise<any> {
  try {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    };
    const res: AxiosResponse<any> = await axios(config);
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, ${`with data: ${JSON.stringify(
          data
        )}`}`
      );
    }
    if (!error.response) {
      window.location.replace(routesPath.page500);
    }
    throw error;
  }
}
