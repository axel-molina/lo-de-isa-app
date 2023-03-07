import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../api/routes_api';
import { API_URL } from '../utils/api_url';
import { setToken } from '../utils/token';

const useLoginHook = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<any>("");
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
        message.success("Bienvenido");
        navigate('/');
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      message.error("Usuario o contraseña incorrectos");
    }
  };

  return {
    login,
    error,
    isLoading,
  };
};

export default useLoginHook;
