import React from "react";
import ItemProduct from "./ItemProduct";
import { Products } from "../../../models/Products/Products.model";

interface IProductsList {
  products: Products[];
  editProduct: (item: Products) => void;
  deleteProduct: (item: Products) => void;
}

const ProductsList = ({
  products,
  editProduct,
  deleteProduct,
}: IProductsList) => (
  <div>
    {products &&
      products.map((product: Products) => (
        <ItemProduct
          key={product._id}
          product={product}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
        />
      ))}
  </div>
);

export default ProductsList;
