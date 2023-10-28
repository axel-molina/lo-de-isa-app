import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showDrawer } from "../features/drawer/drawerSlice";
// Redux
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setUser } from "../features/userData/userDataSlice";
// Routes
import { PageRoutes } from "../routes";

const useNavBarHook = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const userData = useAppSelector((state) => state.userData);

  // Mostrar el drawer
  const handleShow = () => {
    dispatch(showDrawer(true));
  };

  // Cerrar sesión
  const closeSession = () => {
    localStorage.clear();
    navigation(PageRoutes.login);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");
    // Si no hay datos en redux, los seteo con los datos del localstorage
    if (userData._id === "") {
      dispatch(setUser(JSON.parse(userStorage || "{}")));
    }
    // Si no hay token o datos de usuario en el localstorage, redirecciono al login
    if (!token || !userStorage) {
      navigation(PageRoutes.login);
    }
  }, []);
  return {
    handleShow,
    closeSession,
  };
};

export default useNavBarHook;
