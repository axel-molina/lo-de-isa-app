import { useState } from 'react';
import { Routes } from '../api/routes_api';

type Ttoken = {
 access_token: string;
 token_type: string;
 remember_token: string;
};

const useFetchHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>("");

  const API_URL = "https://molisoft-api.onrender.com";

  
  const setToken = (token: Ttoken): void => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  
  const getToken = (): string => {
    let token: Ttoken = null as unknown as Ttoken;
    try {
      token = JSON.parse(localStorage.getItem("token") || "");
    } catch (error) {
      token = null as unknown as Ttoken;
    }
    return token ? `${token.access_token}` : "";
  };

  const request = async (body:  any, method: 'POST' | 'GET' | 'PUT' | 'DELETE') => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL + Routes.login, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if(data.token){
        setToken(data.token);
      }
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      // eslint-disable-next-line
      console.log(error);
    }
  };

  return {
    request,
    data,
    error,
    setToken,
    getToken,
    isLoading,
  };
};

export default useFetchHook;
