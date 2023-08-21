/* eslint-disable no-unreachable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { Routes } from "../api/routes_api";
import { PageRoutes } from "../routes";
import { API_URL } from "../services/api_url";

interface IRegister {
    email: string;
    emailVisibility: boolean;
    password: string;
    passwordConfirm: string;
    name: string;
    lastName: string;
  }

const useRegisterHook = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const register = async (body: IRegister) => {
    setIsLoading(true);

    if (body.password.length < 8) {
      message.error("La contraseña debe tener al menos 8 caracteres");
      setIsLoading(false);
      return;
    }

    if (body.password !== body.passwordConfirm) {
      message.error("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    // validar que el email tenga @
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(body.email)) {
      message.error("El email no es válido");
      setIsLoading(false);
      return;
    }

    // Añadir emailVisibility = true en body
    body.emailVisibility = true;

    try {
      const response = await fetch(API_URL + Routes.user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        message.error("Ya existe un usuario registrado con ese email");
        setIsLoading(false);
        return;
      }

      if (response.status === 200) {
        message.success("Usuario registrado con éxito");
        navigate(PageRoutes.login);
      }

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
  };
};

export default useRegisterHook;
