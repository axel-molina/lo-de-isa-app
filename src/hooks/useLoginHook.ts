import { message } from 'antd';
import { useState } from 'react';
import { Routes } from '../api/routes_api';
import { useAppDispatch } from '../app/hooks';
import { setTokenRedux } from '../features/token/tokenSlice';
import { API_URL } from '../utils/api_url';
import { setToken } from '../utils/token';

const useLoginHook = () => {
  const dispatch = useAppDispatch();
  
  const [isLoading, setIsLoading] = useState(false);

  const login = async (body:  any) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL + Routes.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if(data.token){
        setToken(data.token);
        dispatch(setTokenRedux(data.token));
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      message.error("Usuario o contraseña incorrectos");
    }
  };

  return {
    login,
    isLoading,
  };
};

export default useLoginHook;
