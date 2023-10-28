import { message } from "antd";
import { useAppDispatch } from "../app/hooks";
import useHttpRegister from "../services/auth/useHttpRegister";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../routes";

interface IRegister {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  lastname: string;
  avatar: string;
}

const useRegisterHook = () => {
  const { httpRegisterAsync } = useHttpRegister();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleReturnToLogin = () => {
    navigate(PageRoutes.login);
  };

  const register = async (body: IRegister) => {
    if (body.password.length < 8) {
      message.error("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    const { passwordConfirm, ...newBody } = body;
    if (body.password !== passwordConfirm) {
      message.error("Las contraseñas no coinciden");
      return;
    }

    // validar que el email tenga @
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(body.email)) {
      message.error("El email no es válido");
      return;
    }

    dispatch(httpRegisterAsync(newBody));
  };

  return {
    register,
    handleReturnToLogin,
  };
};

export default useRegisterHook;
