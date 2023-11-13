import React, { KeyboardEventHandler } from "react";
import { Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
// Componenets
import DataGridModal from "./DataGridModal";
// Styles
import {
  Container,
  ModalStyled,
  // HeaderWrapperStyled,
} from "../styles/ModalStyled";
import { Button, Row, Col, Input } from "antd";

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
  handleSearchProduct: KeyboardEventHandler<HTMLInputElement>;
  setSearch: (search: string) => void;
  search: string;
}

const ModalAñadirProd = ({
  show,
  setShow,
  handleSearchProduct,
  setSearch,
  search,
}: IModal) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container show={show}>
      <ModalStyled>
        <Row justify={"space-between"}>
          <Col>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Seleccionar producto
            </Typography>
          </Col>
          <Col style={{ cursor: "pointer" }}>
            <Close onClick={handleClose} />
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={6}>
            <Input
              type="primary"
              id="Buscar"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onPressEnter={handleSearchProduct}
            />
          </Col>
          <Col span={2}>
            <Button type="primary">Buscar</Button>
          </Col>
          <Col span={24}>
            <DataGridModal />
          </Col>
        </Row>
      </ModalStyled>
    </Container>
  );
};

export default ModalAñadirProd;
