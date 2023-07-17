import { useState } from "react";
import { API_URL } from "../../../utils/api_url";
import { Routes } from "../../../api/routes_api";
import { message } from "antd";
import { getToken } from "../../../utils/token";

const useDeleteProductHook = (
  refresh: boolean,
  setRefresh: (value: boolean) => void,
  setShow: (value: boolean) => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token") || getToken();
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");

  const handleDeleteProduct = async (idProduct: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL + Routes.products}/${idProduct}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
      });
      if (response.status === 204) {
        message.success("Producto eliminado");
        // refrescar tabla
        setRefresh(!refresh);
        // Cerrar modal
        setShow(false);
      } else {
        message.error("Error al eliminar el producto");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      message.error("Error al eliminar el producto");
    }
  };

  return {
    isLoading,
    handleDeleteProduct,
  };
};

export default useDeleteProductHook;
