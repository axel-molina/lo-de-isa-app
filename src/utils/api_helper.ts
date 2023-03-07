import axios, { AxiosResponse, Method } from 'axios';
import { API_URL } from './api_url';
import { getToken } from './token';

import qs from 'qs';
export type Ttoken = {
  access_token: string;
  token_type: string;
};

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
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

type JSON = {
  [key: string]: any;
};

export async function get(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, 'get', config);
  return response.data as JSON;
}

export async function post(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, 'post', config);

  return response.data as JSON;
}

export async function postImg(url: string, config: FormData): Promise<JSON> {
  const response = await axiosRequestImg(url, 'post', config);
  return response.data as JSON;
}

export async function put(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, 'put', config);

  return response.data as JSON;
}

export async function del(url: string, config: JSON): Promise<JSON> {
  const response = await axiosRequest(url, 'delete', config);

  return response.data as JSON;
}
