import React from 'react';
import { Button } from '@mui/material';
import { IProducts } from '../../../models/ProductsModel';
import {
  ContainerModalStyled,
  ModalStyled,
  MessageStyled,
  ButtonsContainedStyled,
} from '../styles/ConfirmationDeleteStyled';

interface IConfirmationDeleteModal {
  show: boolean;
  setShow: (value: boolean) => void;
  product: IProducts | null;
}

const ConfirmationDeleteModal = ({
  show,
  setShow,
  product,
}: IConfirmationDeleteModal) => {
  return (
    <ContainerModalStyled show={show}>
      <ModalStyled>
        <MessageStyled>
          ¿Quieres eliminar  <b> { product?.name}</b>?
        </MessageStyled>
        <ButtonsContainedStyled>
          <Button color="error" variant="contained" onClick={() => console.log(product?._id)}>
            Eliminar
          </Button>
          <Button
            color="success"
            variant="contained"
            onClick={() => setShow(false)}
          >
            Cancelar
          </Button>
        </ButtonsContainedStyled>
      </ModalStyled>
    </ContainerModalStyled>
  );
};

export default ConfirmationDeleteModal;
