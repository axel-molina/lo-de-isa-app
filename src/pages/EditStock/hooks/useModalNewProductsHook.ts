import { useState } from "react";
import { API_URL } from "../../../services/api_url";
import { Routes } from "../../../api/routes_api";
import { getToken } from "../../../utils/token";
import { useAppSelector } from "../../../app/hooks";
import { message } from "antd";

interface IData {
    name: string;
    price: number;
    stock: number;
    code: string;
}

const useModalNewProductsHook = (setRefresh: (value: boolean) => void, refresh: boolean) => {
  const token = localStorage.getItem("token") || getToken();
  const userId = useAppSelector((state) => state.userData.id);
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: 0,
    stock: 0,
    code: "",
  });

  const handleInputChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddNewProduct = () => {
    setError("");
    if (data.name === "") {
      setError("Debes completar los campos para continuar");
      return;
    }
    postNewProduct(data);
  };

  const postNewProduct = async (item: IData) => {
    // Agregar propiedad user con userId
    const body = {
      ...item,
      user: userId
    };
    setIsLoading(true);
    try {
      const response = await fetch(API_URL + Routes.products, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
        body: JSON.stringify(body),
      });

      if (response.status === 200) {
        message.success("Producto agregado correctamente");
        // refrescar tabla
        setRefresh(!refresh);
        // limpiar campos
        setData({
          name: "",
          price: 0,
          stock: 0,
          code: "",
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    handleInputChange,
    handleAddNewProduct,
  };
};

export default useModalNewProductsHook;
