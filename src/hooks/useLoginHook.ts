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

    // validar email 
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(body.email)) {
      message.error('El email no tiene un formato válido');
      setIsLoading(false);
      return;
    }

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
