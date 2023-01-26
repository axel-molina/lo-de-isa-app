import React from 'react';
import { Button } from '@mui/material';
// Styles
import {
  PriceContainerStyled,
  ButtonsContainerStyled,
} from '../styles/FooterTableStyled';

interface IPrice {
  precioFinal: number | undefined;
}

const FooterTable = ({ precioFinal }: IPrice) => {
  return (
    <div>
      <PriceContainerStyled>
        Precio total $ {precioFinal ? precioFinal : 0}
      </PriceContainerStyled>
      <ButtonsContainerStyled>
        <Button variant="contained" color="success">
          Vender
        </Button>
        <Button variant="contained" color="error">
          Cancelar
        </Button>
      </ButtonsContainerStyled>
    </div>
  );
};

export default FooterTable;
