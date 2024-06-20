"use client";
import ProductsPage from "@/components/Products/ProductsPage";
import GridPrincipal from "@/components/base/GridPrincipal";
import { useEffect } from "react";
import { useGlobalContext } from "../context/store";

export default function Home() {
  const { products, setProducts } = useGlobalContext();
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const _products = await res.json();
    setProducts(_products);
  };
  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);
  return (
    <GridPrincipal>
      <ProductsPage products={products} />
    </GridPrincipal>
  );
}
