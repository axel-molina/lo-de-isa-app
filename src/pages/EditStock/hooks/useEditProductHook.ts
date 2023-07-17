import { useState, useEffect } from "react";
import { IProducts } from "../../../models/ProductsModel";
import { Routes } from "../../../api/routes_api";
import { API_URL } from "../../../utils/api_url";
import { message } from "antd";

const useEditProductHook = (
  product: IProducts,
  show: boolean,
  setShow: (value: boolean) => void,
  refresh: boolean,
  setRefresh: (value: boolean) => void
) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  // setear el producto a editar
  const [productEdit, setProductEdit] = useState({
    name: "",
    stock: 0,
    price: 0,
    code: "",
    user: "",
  });
  // Agregar Bearer al token y quitarle las comillas
  const tokenBearer = `Bearer ${token?.slice(1, -1)}`;

  const handleEditProduct = () => {
    setError("");
    if (validateFields()) {
      editProduct();
    }
  };

  const editProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL + Routes.products}/${product.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Autorization: tokenBearer,
          },
          body: JSON.stringify(productEdit),
        }
      );

      if (response.status === 200) {
        message.success("Producto editado con éxito");
        // cerrar modal
        setShow(false);
        // actualizar lista de productos
        setRefresh(!refresh);
      } else {
        message.error("Error al editar el producto");
      }
    } catch (error) {
      message.error("Error al editar el producto");
    }
    setIsLoading(false);
  };

  // validar que los campos no esten vacios
  const validateFields = () => {
    if (productEdit.name === "") {
      setError("Completa los campos para editar el producto");
      return false;
    }
    return true;
  };

  const handleInputChange = (e: any) => {
    setProductEdit({
      ...productEdit,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setError("");
    setProductEdit({
      name: product.name,
      stock: Number(product.stock),
      price: Number(product.price),
      code: product.code,
      user: product.user,
    });
  }, [product, show]);

  return {
    error,
    productEdit,
    isLoading,
    handleEditProduct,
    handleInputChange,
  };
};

export default useEditProductHook;
