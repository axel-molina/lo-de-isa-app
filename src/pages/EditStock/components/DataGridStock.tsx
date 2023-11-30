/* eslint-disable multiline-ternary */
import { useState, useEffect } from "react";
// Styles
import {
  HeaderGridStyled,
  ContainerGridStyled,
} from "../../CreateSale/styles/DataGridStyled";
import { ContainerSpinnerStyled } from "../styles/DataGridStyles";
// Components
import { Pagination } from "antd";
import ProductsList from "./ProductsList";
import EditProductModal from "./EditProductModal";
import Spinner from "../../../components/Spinner/Spinner";
import ConfirmationDeleteModal from "./ConfirmationDeleteModal";
// Hooks
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
// Models
import { Products } from "../../../models/Products/Products.model";
// Services
import useHttpGetProducts from "../../../services/products/useHttpGetProducts";

interface IDataGrid {
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

const DataGridStock = ({ refresh, setRefresh }: IDataGrid) => {
  const { httpGetProductsAsync } = useHttpGetProducts();

  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const products = useAppSelector((state) => state.products.products);
  const pagination = useAppSelector((state) => state.products.pagination);
  const [product, setProduct] = useState<Products>({
    _id: "",
    name: "",
    stock: 0,
    price: 0,
    code: "",
    userId: "",
    updatedAt: "",
    createdAt: "",
  });

  const isLoading = useAppSelector(
    (state) => state.loadingProduct.isLoadingProducts
  );

  const deleteProduct = (item: Products) => {
    setProduct(item);
    setShow(true);
  };

  const editProduct = (item: Products) => {
    setProduct(item);
    setShowEditModal(true);
  };

  const handleChangePage = (page: number) => {
    dispatch(httpGetProductsAsync(page, 10, ""));
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
        <ContainerSpinnerStyled>
          <Spinner />
        </ContainerSpinnerStyled>
      ) : (
        <ProductsList
          products={products}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
        />
      )}
      {/* Paginacion */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          defaultCurrent={1}
          onChange={handleChangePage}
          total={pagination.totalProducts}
          showTotal={(total) => `${total} resultados`}
        />
      </div>
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
