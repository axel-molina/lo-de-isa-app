import { message } from "antd";
import { API_URL } from "../api_url";
import { AppThunk } from "../../app/store";
import { Routes } from "../../api/routes_api";
import { setIsLoadingEditProduct } from "../../features/loading/loadingProductSlice";
import { getToken } from "../../utils/token";
import { deleteTokenRedux } from "../../features/token/tokenSlice";
import { resetUser } from "../../features/userData/userDataSlice";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../routes";

interface Body {
  name: string;
  stock: number;
  price: number;
  code: string;
}
interface IEditProduct {
  id: string;
  body: Body;
  setShow?: (value: boolean) => void;
  show?: boolean;
  refresh?: boolean;
  setRefresh?: (value: boolean) => void;
}

const useHttpEditProduct = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || getToken();
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");
  const httpEditProductAsync =
    ({
      id,
      body,
      setShow,
      show,
      refresh,
      setRefresh,
    }: IEditProduct): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoadingEditProduct(true));
      try {
        const response = await fetch(`${API_URL}${Routes.PRODUCT}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenWithoutQuotes}`,
          },
          body: JSON.stringify(body),
        });

        if (response.status === 401) {
          message.error("Sesión expirada, por favor inicie sesión nuevamente");
          localStorage.clear();
          dispatch(deleteTokenRedux());
          dispatch(resetUser());
          navigate(PageRoutes.login);
          dispatch(setIsLoadingEditProduct(false));
          return;
        }

        if (response.ok) {
          setRefresh && refresh && setRefresh(!refresh);
          setShow && show && setShow(!show);
          message.success("Producto editado exitosamente");
          dispatch(setIsLoadingEditProduct(false));
        } else {
          message.error("Error al editar producto");
          dispatch(setIsLoadingEditProduct(false));
        }
      } catch (error) {
        message.error("Error al editar producto");
        dispatch(setIsLoadingEditProduct(false));
      }
    };
  return {
    httpEditProductAsync,
  };
};

export default useHttpEditProduct;
