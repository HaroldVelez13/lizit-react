"use client";
import ProducstSearchs from "@/components/Products/ProducstSearchs";
import ProductsHeader from "@/components/Products/ProductsHeader";
import ProductsTable from "@/components/Products/ProductsTable";
import Skeleton from "@/components/base/Skeleton";
import { IProduct } from "../../context/store";

type IProps = {
  products: IProduct[];
};
export default function ProductsPage({ products }: IProps) {
  return (
    <>
      <ProductsHeader />
      <ProducstSearchs />
      {!products.length ? <Skeleton /> : <ProductsTable />}
    </>
  );
}
