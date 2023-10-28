import { useState } from "react";
import { Input, Typography, InputAdornment } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
// Componenets
import DataGridModal from "./DataGridModal";
// Styles
import {
  Container,
  ModalStyled,
  HeaderWrapperStyled,
} from "../styles/ModalStyled";

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalAñadirProd = ({ show, setShow }: IModal) => {
  const [search, setSearch] = useState<string>("");

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container show={show}>
      <ModalStyled>
        <HeaderWrapperStyled>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccionar producto
          </Typography>
          <div style={{ cursor: "pointer" }}>
            <Close onClick={handleClose} />
          </div>
        </HeaderWrapperStyled>
        <Input
          id="Buscar"
          placeholder="Buscar"
          sx={{ width: "100%", mt: 2, mb: 2 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        <DataGridModal searchState={search} />
      </ModalStyled>
    </Container>
  );
};

export default ModalAñadirProd;
