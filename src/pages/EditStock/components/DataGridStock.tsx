/* eslint-disable multiline-ternary */
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
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import useHttpGetProducts from "../../../services/products/useHttpGetProducts";
import EditProductModal from "./EditProductModal";
import Spinner from "../../../components/Spinner/Spinner";

interface IDataGrid {
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

const DataGridStock = ({ refresh, setRefresh }: IDataGrid) => {
  const { httpGetProductsAsync } = useHttpGetProducts();

  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const products = useAppSelector((state) => state.products);
  const [product, setProduct] = useState<IProducts>({
    id: "",
    name: "",
    stock: 0,
    price: 0,
    code: "",
    user: "",
    updated: "",
    collectionId: "",
    collectionName: "",
    created: "",
  });

  const isLoading = useAppSelector(
    (state) => state.loadingProduct.isLoadingProducts
  );

  const deleteProduct = (item: IProducts) => {
    setProduct(item);
    setShow(true);
  };

  const editProduct = (item: IProducts) => {
    setProduct(item);
    setShowEditModal(true);
  };

  useEffect(() => {
    dispatch(httpGetProductsAsync(1, 10, ""));
  }, [refresh]);

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Editar</div>
        <div>Eliminar</div>
      </HeaderGridStyled>
      {isLoading ? (
        <div style={{ margin: "60px auto" }}>
          <Spinner />
        </div>
      ) : (
        <div>
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
        </div>
      )}
      {/* Modal confirmación de eliminación */}
      <ConfirmationDeleteModal
        product={product}
        show={show}
        setShow={setShow}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      {/* Modal editar producto */}
      <EditProductModal
        product={product}
        show={showEditModal}
        setShow={setShowEditModal}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </ContainerGridStyled>
  );
};

export default DataGridStock;
