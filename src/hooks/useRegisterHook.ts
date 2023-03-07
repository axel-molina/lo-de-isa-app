import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../api/routes_api';
import { PageRoutes } from '../routes';
import { API_URL } from '../utils/api_url';


// TODO: Capturar errores de peticion

const useRegisterHook = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const register = async (body: any) => {
    setIsLoading(true);

    if (body.Password.length < 6) {
      message.error('La contraseña debe tener al menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    if (body.Password !== body.RePassword) {
      message.error('Las contraseñas no coinciden');
      setIsLoading(false);
      return;
    }

    // validar email
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(body.Email)) {
      message.error('El email no es válido');
      setIsLoading(false);
      return;
    }

    delete body.RePassword;
    body.Bank = Number(body.Bank);

    try {
      const response = await fetch(API_URL + Routes.addUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === 201) {
        message.success('Usuario registrado con éxito');
        navigate(PageRoutes.iniciarSesion);
      }

      setIsLoading(false);

    } catch (err: any) {
      setIsLoading(false);
      message.error('Ya existe un usuario registrado con ese email');
      console.log(err.message);
    }
  };

  return {
    register,
    isLoading,
  };
};

export default useRegisterHook;
