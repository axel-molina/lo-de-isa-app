import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { IProducts } from "../../../models/ProductsModel";
import {
  ContainerGridStyled,
  HeaderGridStyled,
  InfoStyled,
  ItemContainerStyled,
} from "../../CreateSale/styles/DataGridStyled";
import ConfirmationDeleteModal from "./ConfirmationDeleteModal";
import { useAppSelector } from "../../../app/hooks";
import useProductListHook from "../../../hooks/useProductListHook";

const DataGridStock = () => {
  const [show, setShow] = useState(false);
  const products = useAppSelector((state) => state.products);
  const [product, setProduct] = useState<IProducts | null>(null);
  const { getProducts } = useProductListHook();

  console.log(products);

  const deleteProduct = (item: IProducts) => {
    console.log("eliminar producto", item);
    setProduct(item);
    setShow(true);
  };

  const editProduct = (item: IProducts) => {
    console.log("editar", item);
  };

  useEffect(() => {
    getProducts(1);
  }, []);

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Editar</div>
        <div>Eliminar</div>
      </HeaderGridStyled>
      {products.map((product: IProducts) => (
        <ItemContainerStyled key={product.id}>
          <div>
            <b>{product.name}</b>
            <InfoStyled>Stock: {product.stock}</InfoStyled>
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
