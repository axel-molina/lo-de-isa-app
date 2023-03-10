import { useState } from 'react';
import { API_URL } from '../utils/api_url';
import { Routes } from '../api/routes_api';
import { getToken } from '../utils/token';
import { useAppDispatch } from '../app/hooks';
import { addProducts } from '../features/products/productSlice';

interface IGetProducts {
  id: string;
  page: number;
  limit?: number;
}

const useProductListHook = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token') || getToken();

  // quitar las comillas del token
  const tokenWithoutQuotes = token?.replace(/['"]+/g, '');

  const getProducts = async ({ id, page }: IGetProducts) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}${Routes.viewProducts}?id=${id}&page=${page}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenWithoutQuotes}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProducts(data);
        dispatch(addProducts(data));
      }
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    getProducts,
    products,
    isLoading,
    error,
  };
};

export default useProductListHook;
