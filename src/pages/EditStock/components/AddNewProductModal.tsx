/* eslint-disable multiline-ternary */
import React from "react";
// Components
import { Input, Modal, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
// Styles
import { LabelStyled } from "../../SignIn/styles/FormSignInStyled";
import {
  ButtonsContainerStyled,
  ContainerSpinnerStyled,
} from "../styles/ModalStyles";
// Hooks
import { useAppSelector } from "../../../app/hooks";
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
  const {
    data,
    error,
    handleInputChange,
    handleEnterPress,
    handleClearInputs,
    handleAddNewProduct,
  } = useModalNewProductsHook(setRefresh, refresh);

  const isLoading = useAppSelector(
    (state) => state.loadingProduct.isLoadingPostProduct
  );

  return (
    <Modal
      title="Añadir producto nuevo"
      open={show}
      onCancel={() => setShow(false)}
      footer={[
        <ButtonsContainerStyled>
          <Button onClick={handleClearInputs}>
            <ReloadOutlined />
          </Button>
          <div>
            <Button onClick={() => setShow(false)}>Cancelar</Button>
            {isLoading ? (
              <ContainerSpinnerStyled style={{ marginLeft: "15px" }}>
                <Spinner />
              </ContainerSpinnerStyled>
            ) : (
              <Button type="primary" onClick={handleAddNewProduct}>
                Añadir
              </Button>
            )}
          </div>
        </ButtonsContainerStyled>,
      ]}
    >
      <LabelStyled>Nombre del producto</LabelStyled>
      <Input
        name="name"
        value={data.name}
        placeholder="Nombre del producto"
        onKeyPress={(e) => handleEnterPress(e)}
        onChange={(e) => handleInputChange(e)}
      />
      <LabelStyled>Precio</LabelStyled>
      <Input
        type="number"
        name="price"
        value={data.price}
        placeholder="Precio"
        onChange={(e) => handleInputChange(e)}
        onKeyPress={(e) => handleEnterPress(e)}
      />
      <LabelStyled>Stock</LabelStyled>
      <Input
        name="stock"
        type="number"
        placeholder="Stock"
        value={data.stock}
        onChange={(e) => handleInputChange(e)}
        onKeyPress={(e) => handleEnterPress(e)}
      />
      <LabelStyled>Código</LabelStyled>
      <Input
        name="code"
        value={data.code}
        placeholder="Código"
        onChange={(e) => handleInputChange(e)}
        onKeyPress={(e) => handleEnterPress(e)}
      />
      <p style={{ color: "red" }}>{error}</p>
    </Modal>
  );
};

export default AddNewProductModal;
