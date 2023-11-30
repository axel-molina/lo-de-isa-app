import { useState, useEffect } from "react";
import { Products } from "../../../models/Products/Products.model";
import useHttpEditProduct from "../../../services/products/useHttpEditProduct";
import { useAppDispatch } from "../../../app/hooks";

const useEditProductHook = (
  product: Products,
  show: boolean,
  setShow: (value: boolean) => void,
  refresh: boolean,
  setRefresh: (value: boolean) => void
) => {
  const dispatch = useAppDispatch();
  const { httpEditProductAsync } = useHttpEditProduct();
  const [error, setError] = useState("");

  // setear el producto a editar
  const [productEdit, setProductEdit] = useState({
    name: "",
    stock: 0,
    price: 0,
    code: "",
    user: "",
  });

  const handleEditProduct = () => {
    setError("");
    if (validateFields()) {
      dispatch(
        httpEditProductAsync({
          id: product._id,
          body: productEdit,
          setShow,
          show,
          refresh,
          setRefresh,
        })
      );
    }
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
      user: product.userId,
    });
  }, [product, show]);

  return {
    error,
    productEdit,
    handleEditProduct,
    handleInputChange,
  };
};

export default useEditProductHook;
