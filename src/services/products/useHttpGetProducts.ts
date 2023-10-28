import { message } from "antd";
import { API_URL } from "../api_url";
import { AppThunk } from "../../app/store";
import { Routes } from "../../api/routes_api";
import { addProducts } from "../../features/products/productSlice";
import { setIsLoadingProducts } from "../../features/loading/loadingProductSlice";
import { getToken } from "../../utils/token";

const useHttpGetProducts = () => {
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

        const data = await response.json();

        if (response.ok) {
          dispatch(addProducts(data.data));
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
