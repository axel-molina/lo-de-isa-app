import React from "react";
import { Modal, Button, Input } from "antd";
// Styles
import { LabelStyled } from "../../SignIn/styles/FormSignInStyled";
// Models
import { IProducts } from "../../../models/ProductsModel";
// Hooks
import useEditProductHook from "../hooks/useEditProductHook";

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
  product: IProducts;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

const EditProductModal = ({
  show,
  setShow,
  product,
  refresh,
  setRefresh,
}: IModal) => {
  const { productEdit, handleInputChange, handleEditProduct, error } =
    useEditProductHook(product, show, setShow, refresh, setRefresh);

  return (
    <Modal
      title={`Editar ${product.name}`}
      open={show}
      onCancel={() => setShow(false)}
      footer={[
        <div
          style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}
        >
          <Button onClick={() => setShow(false)}>Cancelar</Button>
          <Button type="primary" onClick={handleEditProduct}>
            Editar
          </Button>
        </div>,
      ]}
    >
      <LabelStyled>Nombre del producto</LabelStyled>
      <Input
        placeholder="Nombre del producto"
        name="name"
        value={productEdit.name}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Precio</LabelStyled>
      <Input
        type="number"
        placeholder="Precio"
        name="price"
        value={productEdit.price}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Stock</LabelStyled>
      <Input
        type="number"
        placeholder="Stock"
        name="stock"
        value={productEdit.stock}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Código</LabelStyled>
      <Input
        placeholder="Código"
        name="code"
        value={productEdit.code}
        onChange={(e) => handleInputChange(e)}
      />
      <p style={{ color: "red" }}>{error}</p>
    </Modal>
  );
};

export default EditProductModal;
