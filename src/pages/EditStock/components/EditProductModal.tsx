import React from "react";
import { Modal, Button, Input } from "antd";
// Styles
import { LabelStyled } from "../../SignIn/styles/FormSignInStyled";
// Models
import { Products } from "../../../models/Products/Products.model";
// Hooks
import useEditProductHook from "../hooks/useEditProductHook";
import { useAppSelector } from "../../../app/hooks";

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
  product: Products;
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

  const isLoadingEditProduct = useAppSelector(
    (state) => state.loadingProduct.isLoadingEditProduct
  );

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
          <Button
            type="primary"
            loading={isLoadingEditProduct}
            onClick={handleEditProduct}
          >
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
