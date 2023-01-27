import React from 'react';
import { Box, Modal, Input, Typography, InputAdornment } from '@mui/material';
import { Close, Search } from '@mui/icons-material';
// Componenets
import DataGridModal from './DataGridModal';

interface IModal {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalAñadirProd = ({ show, setShow }: IModal) => {

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
        }}
      >
        <div>
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
            sx={{ width: '100%', mt: 2 }}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
          <DataGridModal />
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAñadirProd;
