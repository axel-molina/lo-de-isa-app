import React from 'react';
import { Input, Typography, InputAdornment } from '@mui/material';
import { Close, Search } from '@mui/icons-material';
// Componenets
import DataGridModal from './DataGridModal';
// Styles
import { ModalStyled, Container } from '../styles/ModalStyled';

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalAñadirProd = ({ show, setShow }: IModal) => {

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container show={show}>
        <ModalStyled >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Seleccionar producto
            </Typography>
            <div style={{ cursor: 'pointer' }}>
              <Close onClick={handleClose} />
            </div>
          </div>
          <Input
            id="Buscar"
            placeholder="Buscar"
            sx={{ width: '100%', mt: 2, mb: 2 }}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
          <DataGridModal />
        </ModalStyled>
    </Container>
  );
};

export default ModalAñadirProd;
