import React from "react";
// Components
import { Input, Modal } from "antd";
// Styles
import { LabelStyled } from "../../SignIn/styles/FormSignInStyled";
// Hooks
import useModalNewProductsHook from "../hooks/useModalNewProductsHook";

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalAddNewProduct = ({ show, setShow }: IModal) => {
  // Custom hook
  const { handleAddNewProduct, handleInputChange, error } =
    useModalNewProductsHook();

  return (
    <Modal
      title="Añadir producto nuevo"
      open={show}
      onCancel={() => setShow(false)}
      onOk={handleAddNewProduct}
    >
      <LabelStyled>Nombre del producto</LabelStyled>
      <Input
        placeholder="Nombre del producto"
        name="name"
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Precio</LabelStyled>
      <Input
        type="number"
        placeholder="Precio"
        name="price"
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Stock</LabelStyled>
      <Input
        type="number"
        placeholder="Stock"
        name="stock"
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Código</LabelStyled>
      <Input
        placeholder="Código"
        name="code"
        onChange={(e) => handleInputChange(e)}
      />
      <p style={{ color: "red" }}>{error}</p>
    </Modal>
  );
};

export default ModalAddNewProduct;
