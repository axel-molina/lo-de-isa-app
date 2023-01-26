import { useState } from 'react';
// Components
import DataGrid from './components/DataGrid';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import FooterTable from './components/FooterTable';
// Interface
import { IProducts } from '../../models/ProductsModel';
import ModalAñdirProd from './components/ModalAñdirProd';

const Index = () => {
  const [ListaOrdenDeVenta, setListaOrdenDeVenta] = useState<IProducts[]>([]);
  const [precioFinal, setPrecioFinal] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  // Calcular la suma de los precios de los productos si hay elementos en el array
  const sumaDePrecios = ListaOrdenDeVenta.map((item) => {
    if (item && item.precio) {
      setPrecioFinal(precioFinal + item.precio * item.cantidad);
    }
  });

  // Mostrar el modal
  const showModal = () => {
    setShow(true);
  };

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
      <DataGrid action={'delete'} />
      <FooterTable precioFinal={precioFinal} />
      <ModalAñdirProd show={show} setShow={setShow} />
    </div>
  );
};

export default Index;
