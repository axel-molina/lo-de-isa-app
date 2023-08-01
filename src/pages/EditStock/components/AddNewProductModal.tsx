/* eslint-disable multiline-ternary */
import React from "react";
// Components
import { Input, Modal, Button } from "antd";
// Styles
import { LabelStyled } from "../../SignIn/styles/FormSignInStyled";
// Hooks
import useModalNewProductsHook from "../hooks/useModalNewProductsHook";
import Spinner from "../../../components/Spinner/Spinner";

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
  setRefresh: (refresh: boolean) => void;
  refresh: boolean;
}

const AddNewProductModal = ({ show, setShow, setRefresh, refresh }: IModal) => {
  // Custom hook
  const { handleAddNewProduct, handleInputChange, error, data, isLoading } =
    useModalNewProductsHook(setRefresh, refresh);

  return (
    <Modal
      title="Añadir producto nuevo"
      open={show}
      onCancel={() => setShow(false)}
      footer={[
        <div
          style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}
        >
          <Button onClick={() => setShow(false)}>Cancelar</Button>
          {isLoading ? (
            <Spinner />
          ) : (
            <Button type="primary" onClick={handleAddNewProduct}>
              Añadir
            </Button>
          )}
        </div>,
      ]}
    >
      <LabelStyled>Nombre del producto</LabelStyled>
      <Input
        placeholder="Nombre del producto"
        name="name"
        value={data.name}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Precio</LabelStyled>
      <Input
        type="number"
        placeholder="Precio"
        name="price"
        value={data.price}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Stock</LabelStyled>
      <Input
        type="number"
        placeholder="Stock"
        name="stock"
        value={data.stock}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Código</LabelStyled>
      <Input
        placeholder="Código"
        name="code"
        value={data.code}
        onChange={(e) => handleInputChange(e)}
      />
      <p style={{ color: "red" }}>{error}</p>
    </Modal>
  );
};

export default AddNewProductModal;
