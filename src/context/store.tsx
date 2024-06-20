"use client";
import { createContext, useContext, useState } from "react";

interface ContextProps {
  product: object;
  setProduct: (prodcut: object) => void;
  products: Array<object>;
  setProducts: (products: Array<object>) => void;
}

export const GlobalContext = createContext<ContextProps>({
  product: {},
  setProduct: () => {},
  products: [],
  setProducts: (products: Array<object>) => [],
});

type IProps = {
  children: React.ReactNode;
};
export const GlobalContextProvider = ({ children }: IProps) => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([{}]);

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
