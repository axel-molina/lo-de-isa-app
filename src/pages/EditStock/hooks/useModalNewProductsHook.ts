import { useState } from "react";
import { API_URL } from "../../../utils/api_url";
import { Routes } from "../../../api/routes_api";
import { getToken } from "../../../utils/token";
import { useAppSelector } from "../../../app/hooks";
import { message } from "antd";

interface IData {
    name: string;
    price: string;
    stock: string;
    code: string;
}

const useModalNewProductsHook = () => {
  const token = localStorage.getItem("token") || getToken();
  const userId = useAppSelector((state) => state.userData.id);
  const tokenWithoutQuotes = token?.replace(/['"]+/g, "");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    stock: "",
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
    if (data.name === "" || data.price === "" || data.stock === "") {
      setError("Completa los campos para continuar");
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
      const response = await fetch(API_URL + Routes.addProduct, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.code === 200) {
        message.success("Producto agregado correctamente");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    handleInputChange,
    handleAddNewProduct,
  };
};

export default useModalNewProductsHook;
