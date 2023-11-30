import { message } from "antd";
import { API_URL } from "../api_url";
import { AppThunk } from "../../app/store";
import { Routes } from "../../api/routes_api";
import {
  addPagination,
  addProducts,
} from "../../features/products/productSlice";
import { setIsLoadingProducts } from "../../features/loading/loadingProductSlice";
import { getToken } from "../../utils/token";
import { deleteTokenRedux } from "../../features/token/tokenSlice";
import { resetUser } from "../../features/userData/userDataSlice";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../routes";
import { DataProducts } from "../../models/Products/DataProducts.model";

interface Data {
  data: DataProducts;
}

const useHttpGetProducts = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || getToken();
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");
  const httpGetProductsAsync =
    (page: number, limit: number, search: string): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoadingProducts(true));
      try {
        const response = await fetch(
          `${API_URL}${Routes.GET_PRODUCT_PAGINATED}?page=${page}&limit=${limit}&search=${search}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenWithoutQuotes}`,
            },
          }
        );
        if (response.status === 401) {
          message.error("Sesión expirada, por favor inicie sesión nuevamente");
          localStorage.clear();
          dispatch(deleteTokenRedux());
          dispatch(resetUser());
          navigate(PageRoutes.login);
          dispatch(setIsLoadingProducts(false));
          return;
        }

        const data: Data = await response.json();
        if (response.ok) {
          dispatch(addProducts(data.data.products));
          dispatch(addPagination(data.data.pagination));
          dispatch(setIsLoadingProducts(false));
        } else {
          message.error("Error al consultar productos");
          dispatch(setIsLoadingProducts(false));
        }
      } catch (error) {
        message.error("Error al consultar productos");
        dispatch(setIsLoadingProducts(false));
      }
    };
  return {
    httpGetProductsAsync,
  };
};

export default useHttpGetProducts;
