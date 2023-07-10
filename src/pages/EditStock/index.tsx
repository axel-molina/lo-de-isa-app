import React from 'react';
// import { useState, useEffect } from 'react';
// Components
import Header from '../../components/NavBar';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import DataGridStock from './components/DataGridStock';
// Interface
// import { IProducts } from '../../models/ProductsModel';
// Redux
// import { useAppSelector } from '../../app/hooks';
// Styles
import { ContainerStyled, ContainerButton } from '../CreateSale/styles/Styles';

const index = () => {

    const handleAddProduct = () => {
        // console.log('Añadir producto');
    };

  return (
    <div>
      <Header />
      <ContainerStyled>
        <ContainerButton>
          <Button
            variant="contained"
            color="success"
            style={{ paddingLeft: '4px' }}
            onClick={() => {
              handleAddProduct();
            }}
          >
            <Add />
            Añadir producto
          </Button>
        </ContainerButton>
        <DataGridStock />
      </ContainerStyled>
    </div>
  );
};

export default index;
