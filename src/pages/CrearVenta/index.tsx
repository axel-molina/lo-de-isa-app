import { useState, useEffect } from 'react';
// Components
import DataGrid from './components/DataGrid';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import FooterTable from './components/FooterTable';
// Interface
import { IProducts } from '../../models/ProductsModel';
import ModalAñadirProd from './components/ModalAñadirProd';
// Redux
import { useAppSelector } from '../../app/hooks';

const Index = () => {
  const ListaOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const [show, setShow] = useState<boolean>(false);

  const sumaDePrecios = (): number => {
    let suma = 0;
    ListaOrdenDeVenta.forEach((item: IProducts) => {
      suma += item.precio * item.cantidad;
    });
    return suma;
  };

  // Mostrar el modal
  const showModal = () => {
    setShow(true);
  };

  useEffect(() => {
    sumaDePrecios();
  }, [ListaOrdenDeVenta]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '10px',
        }}
      >
        <Button
          variant="contained"
          color="success"
          style={{ paddingLeft: '4px' }}
          onClick={() => {
            showModal();
          }}
        >
          <Add />
          Añadir
        </Button>
      </div>
      <DataGrid />
      <FooterTable precioFinal={sumaDePrecios()} />
      <ModalAñadirProd show={show} setShow={setShow} />
    </div>
  );
};

export default Index;
