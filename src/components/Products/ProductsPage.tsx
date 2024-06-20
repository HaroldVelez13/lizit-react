"use client";
import ProducstSearchs from "@/components/Products/ProducstSearchs";
import ProductsHeader from "@/components/Products/ProductsHeader";
import ProductsTable from "@/components/Products/ProductsTable";

export default function ProductsPage({ products }: any) {
  return (
    <>
      <ProductsHeader />
      <ProducstSearchs />
      <ProductsTable products={products} />
    </>
  );
}
