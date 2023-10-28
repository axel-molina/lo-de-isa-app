import { AppThunk } from "../../app/store";
import { API_URL } from "../api_url";
import { Routes } from "../../api/routes_api";
import { message } from "antd";
import { setIsLoadingRegister } from "../../features/loading/loadingsAuthSlice";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../routes";

interface IDataRegister {
  email: string;
  password: string;
  avatar: string;
  name: string;
  lastname: string;
}

const useHttpRegister = () => {
  const navigate = useNavigate();
  const httpRegisterAsync =
    (dataUser: IDataRegister): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoadingRegister(true));
      try {
        const response = await fetch(`${API_URL}${Routes.REGISTER}`, {
          method: "POST",
          body: JSON.stringify({
            email: dataUser.email,
            password: dataUser.password,
            bank: 0,
            avatar: dataUser.avatar,
            name: dataUser.name,
            lastname: dataUser.lastname,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          message.error("Ya existe un usuario registrado con ese email");
          dispatch(setIsLoadingRegister(false));
          return;
        }

        if (response.status === 200) {
          message.success("Usuario registrado con éxito");
          dispatch(setIsLoadingRegister(false));
          navigate(PageRoutes.login);
        }
      } catch (error) {
        message.error("Error de registro");
        dispatch(setIsLoadingRegister(false));
      }
    };
  return {
    httpRegisterAsync,
  };
};

export default useHttpRegister;
