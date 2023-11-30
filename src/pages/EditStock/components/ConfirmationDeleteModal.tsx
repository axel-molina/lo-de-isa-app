/* eslint-disable multiline-ternary */
import React from "react";
import { Products } from "../../../models/Products/Products.model";
import { Modal, Button } from "antd";
import useHttpDeleteProduct from "../../../services/products/useHttpDeleteProduct";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

interface IConfirmationDeleteModal {
  show: boolean;
  setShow: (value: boolean) => void;
  product: Products;
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

const ConfirmationDeleteModal = ({
  show,
  setShow,
  product,
  refresh,
  setRefresh,
}: IConfirmationDeleteModal) => {
  const dispatch = useAppDispatch();
  const { httpDeleteProductAsync } = useHttpDeleteProduct();

  const handleDeleteProduct = () => {
    dispatch(
      httpDeleteProductAsync({
        id: product._id,
        refresh,
        setRefresh,
        setShow,
        show,
      })
    );
  };

  const isLoadingDeleteProduct = useAppSelector(
    (state) => state.loadingProduct.isLoadingDeleteProduct
  );

  return (
    <Modal
      title="Eliminar artículo"
      open={show}
      onCancel={() => setShow(false)}
      onOk={() => setShow(false)}
      footer={[
        <div
          style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}
        >
          <Button onClick={() => setShow(false)}>Cancelar</Button>
          <Button
            type="primary"
            danger
            loading={isLoadingDeleteProduct}
            onClick={handleDeleteProduct}
          >
            Eliminar
          </Button>
        </div>,
      ]}
    >
      <p>¿Quieres eliminar {product?.name}?</p>
    </Modal>
  );
};

export default ConfirmationDeleteModal;
