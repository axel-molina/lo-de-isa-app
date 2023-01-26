import React from 'react';
import { Button } from '@mui/material';
// Styles
import {
  PriceContainerStyled,
  ButtonsContainerStyled,
} from '../styles/FooterTableStyled';

interface IPrice {
  precioFinal: number;
}

const FooterTable = ({ precioFinal }: IPrice) => {
  // Mostart precio con dos decimales
  const precioFinalConDosDecimales = precioFinal?.toFixed(2).replace('.', ',');

  return (
    <div>
      <PriceContainerStyled>
        Precio total ${' '}
        {precioFinalConDosDecimales ? precioFinalConDosDecimales : 0}
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
