"use client";
import { createContext, useContext, useState } from "react";

export interface IRating {
  rate: number;
  count: number;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
interface ContextProps {
  product: IProduct;
  setProduct: (prodcut: IProduct) => void;
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export const GlobalContext = createContext<ContextProps>({
  product: {} as IProduct,
  setProduct: () => {},
  products: [] as IProduct[],
  setProducts: (products: IProduct[]) => [],
});

type IProps = {
  children: React.ReactNode;
};
export const GlobalContextProvider = ({ children }: IProps) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        product,
        setProduct,
        products,
        setProducts,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): ContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
