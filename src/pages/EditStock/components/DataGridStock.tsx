import { useState } from 'react';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { IProducts } from '../../../models/ProductsModel';
import {
  ContainerGridStyled,
  HeaderGridStyled,
  InfoStyled,
  ItemContainerStyled,
} from '../../CreateSale/styles/DataGridStyled';
import ConfirmationDeleteModal from './ConfirmationDeleteModal';

const DataGridStock = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState<IProducts | null>(null);

  const deleteProduct = (product: IProducts) => {
    setProduct(product);
    setShow(true);
  };

  const editProduct = (product: IProducts) => {
    console.log(product);
  };

  const products: IProducts[] = [
    {
      _id: '1',
      name: 'Producto 1',
      price: 100,
      quantity: 1,
      stock: 10,
      code: '123456',
    },
  ];

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Editar</div>
        <div>Eliminar</div>
      </HeaderGridStyled>
      {products.map((product: IProducts) => (
        <ItemContainerStyled key={product._id}>
          <div>
            <b>{product.name}</b>
            <InfoStyled>Stock: {product.quantity}</InfoStyled>
            <InfoStyled>${product.price.toFixed(2)}</InfoStyled>
          </div>
          <div style={{}}>
            <Button variant="outlined" onClick={() => editProduct(product)}>
              <Edit />
            </Button>
          </div>
          <div style={{}}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteProduct(product)}
            >
              <Delete />
            </Button>
          </div>
        </ItemContainerStyled>
      ))}
      <ConfirmationDeleteModal
        product={product}
        show={show}
        setShow={setShow}
      />
    </ContainerGridStyled>
  );
};

export default DataGridStock;
