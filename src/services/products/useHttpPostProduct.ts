/* eslint-disable no-unused-vars */
import { AppThunk } from "../../app/store";
import { API_URL } from "../api_url";
import { Routes } from "../../api/routes_api";
import { message } from "antd";
import { setIsLoadingPostProduct } from "../../features/loading/loadingProductSlice";
import { getToken } from "../../utils/token";
import { deleteTokenRedux } from "../../features/token/tokenSlice";
import { resetUser } from "../../features/userData/userDataSlice";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../routes";

interface IProduct {
  name: string;
  price: number;
  stock: number;
  code: string;
}

const useHttpPostProduct = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token") || getToken();
  const userIdParsed = user ? JSON.parse(user)._id : "";
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");

  const httpPostProductAsync =
    (
      product: IProduct,
      refresh: boolean,
      setRefresh: (value: boolean) => void
    ): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoadingPostProduct(true));
      try {
        const response = await fetch(`${API_URL}${Routes.PRODUCT}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenWithoutQuotes}`,
          },
          body: JSON.stringify({
            name: product.name,
            price: product.price,
            stock: product.stock,
            code: product.code,
            userId: userIdParsed,
          }),
        });

        if (response.status === 401) {
          message.error("Sesión expirada, por favor inicie sesión nuevamente");
          localStorage.clear();
          dispatch(deleteTokenRedux());
          dispatch(resetUser());
          navigate(PageRoutes.login);
          dispatch(setIsLoadingPostProduct(false));
          return;
        }
        if (response.status === 201) {
          message.success("Producto agregado correctamente");
          setRefresh(!refresh);
          dispatch(setIsLoadingPostProduct(false));
        }
        dispatch(setIsLoadingPostProduct(false));
      } catch (error) {
        message.error("Error al intentar agregar el producto");
        dispatch(setIsLoadingPostProduct(false));
      }
    };
  return {
    httpPostProductAsync,
  };
};

export default useHttpPostProduct;
