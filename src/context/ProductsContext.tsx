"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ProductsContextType = {
  user: boolean | null;
  login: () => void;
  logout: () => void;
};

const productsContextDefaultValues: ProductsContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

const ProductsContext = createContext<ProductsContextType>(
  productsContextDefaultValues
);

export function useAuth() {
  return useContext(ProductsContext);
}

type Props = {
  children: ReactNode;
};

export function ProductsProvider({ children }: Props) {
  const [user, setUser] = useState<boolean | null>(null);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
    </>
  );
}
