import { useEffect } from 'react';
// Interface
import { IProducts } from '../../../models/ProductsModel';
// Styles
import {
  ContainerGridStyled,
  HeaderGridStyledModal,
  ItemContainerStyledModal,
} from '../styles/DataGridStyled';
// Redux
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addProduct } from '../../../features/productsInSalesOrder/productsInSalesOrderSlice';
// Hooks
import useUserDataHook from '../../../hooks/useUserDataHook';
import useProductListHook from '../../../hooks/useProductListHook';
// Components
import { Button } from '@mui/material';
import Spinner from '../../../components/Spinner/Spinner';

const DataGridModal = () => {
  const dispatch = useAppDispatch();
  const { getUserData } = useUserDataHook();
  const { getProducts, products, isLoading } = useProductListHook();
  const userData = useAppSelector((state) => state.userData);
  const email = localStorage.getItem('email');

  const addItem = (item: IProducts) => {
    // Añadir a redux
    dispatch(addProduct(item));
  };

  // console.log(products);

  useEffect(() => {
    if (userData.id) {
      const data = {
        id: '000000000000000000000000',
        // id: userData.id,
        page: 1,
      };

      getProducts(data);
      return;
    }
    if (email) {
      getUserData(email);
    }
  }, [userData.id]);

  return (
    <ContainerGridStyled>
      <HeaderGridStyledModal>
        <div>Producto</div>
        <div>Precio</div>
        <div>Stock</div>
        <div></div>
      </HeaderGridStyledModal>
      {isLoading ? (
        <Spinner />
      ) : (
        products &&
        products.map((item: IProducts, index: any) => (
          <ItemContainerStyledModal key={index} onClick={() => addItem(item)}>
            <div>{item?.name}</div>
            <div style={{ marginLeft: '25%' }}>${item?.price?.toFixed(2)}</div>
            <div style={{ marginLeft: '48%' }}>{item?.stock}</div>
          </ItemContainerStyledModal>
        ))
      )}

      {(products?.length === 0 || products === null) && !isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '20px',
          }}
        >
          <p style={{ textAlign: 'center' }}>
            Aún no hay productos en tu lista
          </p>
          <Button color="success" variant="contained">
            Agregar productos
          </Button>
        </div>
      )}
    </ContainerGridStyled>
  );
};

export default DataGridModal;
