/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { message } from "antd";
import { deleteTokenRedux } from "../../features/token/tokenSlice";
import { resetUser } from "../../features/userData/userDataSlice";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../routes";

interface IEditProduct {
  name: string;
  stock: number;
  price: number;
  code: string;
  user: string;
}

const useEditProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // Agregar Bearer al token y quitarle las comillas
  const tokenBearer = `Bearer ${token?.slice(1, -1)}`;
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const editAsyncProduct = async (
    productId: string,
    productEdit: IEditProduct,
    setShow?: (value: boolean) => void,
    setRefresh?: (value: boolean) => void,
    refresh?: boolean
  ) => {
    setIsLoadingEdit(true);
    try {
      const response = await fetch(
        `https://molisoft.pockethost.io/api/collections/products/records/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Autorization: tokenBearer,
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(productEdit),
        }
      );

      if (response.status === 401) {
        message.error("Sesión expirada, por favor inicie sesión nuevamente");
        localStorage.clear();
        dispatch(deleteTokenRedux());
        dispatch(resetUser());
        navigate(PageRoutes.login);
        setIsLoadingEdit(false);
        return;
      }

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

export default useEditProduct;
