"use client";
import ProductsPage from "@/components/Products/ProductsPage";
import GridPrincipal from "@/components/base/GridPrincipal";
import { useEffect } from "react";
import { IProduct, useGlobalContext } from "../context/store";

export default function Home() {
  const { products, setProducts, setCategories } = useGlobalContext();
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const _products: IProduct[] = await res.json();
    setProducts(_products);
    const _categories = _products
      .map((product: IProduct) => product.category)
      .filter((value, index, array) => array.indexOf(value) === index);
    setCategories(_categories);
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
