import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// Styles
import {
  PriceContainerStyled,
  ButtonsContainerStyled,
} from '../styles/FooterTableStyled';
// Redux
import { useAppDispatch } from "../../../app/hooks";
import { clearCart } from '../../../features/productsInSalesOrder/productsInSalesOrderSlice';

interface IPrice {
  precioFinal: number;
}

const FooterTable = ({ precioFinal }: IPrice) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Mostart precio con dos decimales
  const precioFinalConDosDecimales = precioFinal?.toFixed(2).replace('.', ',');
  // Funcion para cancelar venta
  const handleCancelar = () => {
    // limpiar carrito redux
    dispatch(clearCart("clear"));
    // redireccionar a ventas
    navigate('/');
  };

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
        <Button variant="contained" color="error" onClick={()=>handleCancelar()}>
          Cancelar
        </Button>
      </ButtonsContainerStyled>
    </div>
  );
};

export default FooterTable;
