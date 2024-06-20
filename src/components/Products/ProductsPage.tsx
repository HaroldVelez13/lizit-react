"use client";
import ProducstSearchs from "@/components/Products/ProducstSearchs";
import ProductsHeader from "@/components/Products/ProductsHeader";
import ProductsTable from "@/components/Products/ProductsTable";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/store";

export default function ProductsPage() {
  const { setProduct } = useGlobalContext();
  useEffect(() => {
    setProduct({ firstName: "Tim" });
  }, []);
  return (
    <>
      <ProductsHeader />
      <ProducstSearchs />
      <ProductsTable />
    </>
  );
}
