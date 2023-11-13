import { Pagination } from "./Pagination.model";
import { Products } from "./Products.model";

export interface DataProducts {
  pagination: Pagination;
  products: Products[];
}
