import axios, {
  AxiosError as AAxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";

export type Response<T> = { code: number; data: T; total: number };

export type AxiosError = AAxiosError<{ message: string }>;
class APIService {
  private readonly axiosInstance: AxiosInstance;
  private readonly token: string | null | undefined;

  constructor(config: CreateAxiosDefaults) {
    if (typeof localStorage !== "undefined") {
      this.token = localStorage.getItem("accessToken") || null;
    }
    this.axiosInstance = axios.create(config);
    const hasAuthorizationHeader =
      !!this.axiosInstance.defaults.headers.common.Authorization;
    const hasToken = !!this.token;
    if (!hasAuthorizationHeader && hasToken) {
      this.axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${this.token}`;
        return config;
      });
    }
  }
  protected async get<T, D = unknown>(
    url: string,
    params?: D,
    token?: string,
    headers?: AxiosRequestConfig["headers"],
  ) {
    return this.axiosInstance.get<Response<T>>(url, {
      params,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  protected async post<T, D>(
    url: string,
    data: D,
    headers?: AxiosRequestConfig["headers"],
  ) {
    return this.axiosInstance.post<Response<T>>(url, data, { headers });
  }

  protected async put<T, D>(
    url: string,
    data: D,
    headers?: AxiosRequestConfig["headers"],
  ) {
    return this.axiosInstance.put<Response<T>>(url, data, { headers });
  }

  protected async delete<T, D>(
    url: string,
    data?: D,
    headers?: AxiosRequestConfig["headers"],
  ) {
    return this.axiosInstance.delete<Response<T>>(url, { headers, data });
  }

  protected async patch<T, D>(
    url: string,
    data: D,
    headers?: AxiosRequestConfig["headers"],
  ) {
    return this.axiosInstance.patch<Response<T>>(url, data, { headers });
  }
}

export type createAxiosDefaults = CreateAxiosDefaults;
export default APIService;
