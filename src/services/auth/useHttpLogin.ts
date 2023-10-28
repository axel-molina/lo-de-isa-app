import { message } from "antd";
import { API_URL } from "../api_url";
import { PageRoutes } from "../../routes";
import { AppThunk } from "../../app/store";
import { setToken } from "../../utils/token";
import { Routes } from "../../api/routes_api";
import { useNavigate } from "react-router-dom";
import { setTokenRedux } from "../../features/token/tokenSlice";
import { setUser } from "../../features/userData/userDataSlice";
import { setIsLoadingLogin } from "../../features/loading/loadingsAuthSlice";

const useHttplogin = () => {
  const navigate = useNavigate();
  const httpLoginAsync =
    (email: string, password: string): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoadingLogin(true));
      try {
        const response = await fetch(`${API_URL}${Routes.LOGIN}`, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.token) {
          setToken(data.token);
          dispatch(setTokenRedux(data.token));
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...userData } = data.user;
          dispatch(setUser(userData));
          localStorage.setItem("user", JSON.stringify(userData));
          navigate(PageRoutes.home);
          dispatch(setIsLoadingLogin(false));
        } else {
          message.error("Usuario o contraseña incorrectos");
          dispatch(setIsLoadingLogin(false));
        }
      } catch (error) {
        message.error("Error al iniciar sesión");
        dispatch(setIsLoadingLogin(false));
      }
    };
  return {
    httpLoginAsync,
  };
};

export default useHttplogin;
