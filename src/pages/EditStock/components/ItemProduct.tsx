import React from "react";
// Styles
import {
  ItemContainerStyled,
  InfoStyled,
} from "../../CreateSale/styles/DataGridStyled";
// Model
import { Products } from "../../../models/Products/Products.model";
// Components
import { Button } from "@mui/material";
// icons
import { Delete, Edit } from "@mui/icons-material";

interface IItemProduct {
  product: Products;
  editProduct: (item: Products) => void;
  deleteProduct: (item: Products) => void;
}

const ItemProduct = ({ product, editProduct, deleteProduct }: IItemProduct) => (
  <ItemContainerStyled key={product._id}>
    <div>
      <b>{product.name}</b>
      <InfoStyled>Stock: {product.stock}</InfoStyled>
      <InfoStyled>${product.price.toFixed(2)}</InfoStyled>
    </div>
    <div>
      <Button variant="outlined" onClick={() => editProduct(product)}>
        <Edit />
      </Button>
    </div>
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={() => deleteProduct(product)}
      >
        <Delete />
      </Button>
    </div>
  </ItemContainerStyled>
);

export default ItemProduct;
