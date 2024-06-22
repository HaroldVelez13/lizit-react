"use client";

import ProducstSearchs from "@/components/Products/ProductsList/ProducstSearchs";
import ProductsTable from "@/components/Products/ProductsList/ProductsTable";
import ProductsHeader from "@/components/Products/common/ProductsHeader";
import Skeleton from "@/components/base/Skeleton";
import { IProduct } from "@/context/store";

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
