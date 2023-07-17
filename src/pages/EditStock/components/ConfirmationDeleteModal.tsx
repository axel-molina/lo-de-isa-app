/* eslint-disable multiline-ternary */
import React from "react";
import { IProducts } from "../../../models/ProductsModel";
import { Modal, Button } from "antd";
import useDeleteProductHook from "../hooks/useDeleteProductHook";
import Spinner from "../../../components/Spinner/Spinner";

interface IConfirmationDeleteModal {
  show: boolean;
  setShow: (value: boolean) => void;
  product: IProducts;
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
  const { handleDeleteProduct, isLoading } = useDeleteProductHook(
    refresh,
    setRefresh,
    setShow
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
          {isLoading ? (
            <Spinner />
          ) : (
            <Button
              type="primary"
              danger
              onClick={() => handleDeleteProduct(product.id)}
            >
              Eliminar
            </Button>
          )}
        </div>,
      ]}
    >
      <p>¿Quieres eliminar {product?.name}?</p>
    </Modal>
  );
};

export default ConfirmationDeleteModal;
