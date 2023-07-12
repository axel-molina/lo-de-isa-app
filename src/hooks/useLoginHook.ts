import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { Routes } from "../api/routes_api";
import { useAppDispatch } from "../app/hooks";
// Redux states
import { setTokenRedux } from "../features/token/tokenSlice";
import { setUser } from "../features/userData/userDataSlice";
// Utils
import { API_URL } from "../utils/api_url";
import { setToken } from "../utils/token";
import { PageRoutes } from "../routes";

interface ILogin {
  identity: string;
  password: string;
}

const useLoginHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (body: ILogin) => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL + Routes.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        dispatch(setTokenRedux(data.token));
        dispatch(setUser(data.record));
        localStorage.setItem("user", JSON.stringify(data.record));
        navigate(PageRoutes.home);
      }
      if (data.code === 400) {
        message.error("Usuario o contraseña incorrectos");
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      message.error("Usuario o contraseña incorrectos");
    }
  };

  return {
    handleLogin,
    isLoading,
  };
};

export default useLoginHook;
