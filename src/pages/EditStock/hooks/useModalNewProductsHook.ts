import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
// Services
import useHttpPostProduct from "../../../services/products/useHttpPostProduct";

interface IData {
  name: string;
  price: number;
  stock: number;
  code: string;
}

const useModalNewProductsHook = (
  setRefresh: (value: boolean) => void,
  refresh: boolean
) => {
  const { httpPostProductAsync } = useHttpPostProduct();

  const dispatch = useAppDispatch();

  const [error, setError] = useState("");
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

  const postNewProduct = (item: IData) => {
    dispatch(httpPostProductAsync(item, refresh, setRefresh));
  };

  return {
    data,
    error,
    handleInputChange,
    handleAddNewProduct,
  };
};

export default useModalNewProductsHook;
