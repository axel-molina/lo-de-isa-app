import { useState } from "react";
import { Routes } from "../../api/routes_api";
import { API_URL } from "../api_url";
import { message } from "antd";

interface IEditProduct {
    name: string;
    stock: number;
    price: number;
    code: string;
    user: string;
}

const editProduct = () => {
  const token = localStorage.getItem("token");
  // Agregar Bearer al token y quitarle las comillas
  const tokenBearer = `Bearer ${token?.slice(1, -1)}`;
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const editAsyncProduct = async (
    productId: string,
    productEdit: IEditProduct,
    setShow?: (value: boolean) => void,
    setRefresh?: (value: boolean) => void,
    refresh?: boolean,
  ) => {
    setIsLoadingEdit(true);
    try {
      const response = await fetch(`${API_URL + Routes.products}/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Autorization: tokenBearer,
        },
        body: JSON.stringify(productEdit),
      });

      if (response.status === 200) {
        message.success("Producto editado con éxito");
        // cerrar modal
        setShow && setShow(false);
        // actualizar lista de productos
        setRefresh && refresh && setRefresh(!refresh);
      } else {
        message.error("Error al editar el producto");
      }
    } catch (error) {
      message.error("Error al editar el producto");
    }
    setIsLoadingEdit(false);
  };
  return {
    editAsyncProduct,
    isLoadingEdit,
  };
};

export default editProduct;
