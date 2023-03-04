import axios, { AxiosResponse, Method } from "axios";
import qs from "qs";
// pass new generated access token here
// const token = "";
export type Ttoken = {
  access_token: string;
  token_type: string;
  remember_token: string;
};

export const setToken = (token: Ttoken): void => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getToken = (): string => {
  let token: Ttoken = null as unknown as Ttoken;
  try {
    token = JSON.parse(localStorage.getItem("token") || "");
  } catch (error) {
    token = null as unknown as Ttoken;
  }
  return token ? `${token.access_token}` : "";
};

// apply base url for axios
const API_URL = "https://localhost:8080";


export const axiosApi = axios.create({
  baseURL: API_URL,
});

const axiosRequest = async (
  url: string,
  method: Method,
  config: JSON
): Promise<AxiosResponse> => {
  const sConfig = qs.stringify(config);
  const res = await axiosApi({
    method,
    url,
    data: sConfig,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res;
};

const axiosRequestImg = async (
  url: string,
  method: Method,
  config: any
): Promise<AxiosResponse> => {
  // const sConfig = qs.stringify(config);
  const res = await axiosApi({
    method,
    url,
    data: config,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export enum Routes {
    viewprofile= "/viewprofile",
    viewProducts = "/viewProducts",
    viewAvatar = "/viewAvatar",
    login = "/login",
    addUser = "/addUser",
    addProduct = "/addProduct",
    uploadAvatar = "/uploadAvatar",
    editUser = "/editUser",
    editProduct = "/editProduct",
    deleteProduct = "/deleteProduct",
    deleteUser = "/deleteUser",
}

type JSON = {
  [key: string]: any;
};

export async function get(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, "get", config);
  return response.data as JSON;
}

export async function post(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, "post", config);
  return response.data as JSON;
}

export async function postImg(url: string, config: FormData): Promise<JSON> {
  const response = await axiosRequestImg(url, "post", config);
  return response.data as JSON;
}

export async function put(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, "put", config);
  return response.data as JSON;
}

export async function del(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, "delete", config);
  return response.data as JSON;
}