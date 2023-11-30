import { message } from "antd";
import { API_URL } from "../api_url";
import { AppThunk } from "../../app/store";
import { Routes } from "../../api/routes_api";
import { setIsLoadingDeleteProduct } from "../../features/loading/loadingProductSlice";
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
  setShow: (value: boolean) => void;
  show: boolean;
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

const useHttpDeleteProduct = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || getToken();
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");
  const httpDeleteProductAsync =
    ({
      id,
      setShow,
      show,
      refresh,
      setRefresh,
    }: IEditProduct): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoadingDeleteProduct(true));
      try {
        const response = await fetch(`${API_URL}${Routes.PRODUCT}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenWithoutQuotes}`,
          },
        });

        if (response.status === 401) {
          message.error("Sesión expirada, por favor inicie sesión nuevamente");
          localStorage.clear();
          dispatch(deleteTokenRedux());
          dispatch(resetUser());
          navigate(PageRoutes.login);
          dispatch(setIsLoadingDeleteProduct(false));
          return;
        }

        if (response.ok) {
          setRefresh(!refresh);
          setShow(!show);
          message.success("Producto eliminado exitosamente");
          dispatch(setIsLoadingDeleteProduct(false));
        } else {
          message.error("Error al eliminar producto");
          dispatch(setIsLoadingDeleteProduct(false));
        }
      } catch (error) {
        message.error("Error al eliminar producto");
        dispatch(setIsLoadingDeleteProduct(false));
      }
    };
  return {
    httpDeleteProductAsync,
  };
};

export default useHttpDeleteProduct;
