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
import { message } from 'antd';

const DataGridModal = () => {
  const dispatch = useAppDispatch();
  const { getUserData } = useUserDataHook();
  const { getProducts, products, isLoading } = useProductListHook();
  const userData = useAppSelector((state) => state.userData);
  const cart = useAppSelector((state) => state.productosEnOrdenDeVenta);
  const email = localStorage.getItem('email');

  const noStockAvalible = (item: IProducts) => {
    // Verificar si el item ya existe en el carrito y si la cantidad es igual al stock
    return cart.find((cartItem) => cartItem._id === item._id) &&
      cart.find((cartItem) => cartItem._id === item._id)?.quantity ===
        item.stock;
  };

  const addItem = (item: IProducts) => {
    if (noStockAvalible(item)) {
      message.error('No hay suficiente stock disponible');
      return;
    }
    // hacer una copia del item
    const newItem = { ...item };
    // agregar la propiedad quantity
    newItem.quantity = 1;
    // Añadir a redux
    dispatch(addProduct(newItem));
    message.success('Producto añadido');
  };

  // console.log(products);

  useEffect(() => {
    if (userData.id) {
      const data = {
        // id: '000000000000000000000000',
        id: userData.id,
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
        products.map((item: IProducts) => (
          <ItemContainerStyledModal
            key={item._id}
            onClick={() => addItem(item)}
          >
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
