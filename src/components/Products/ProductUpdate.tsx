"use client";
import ProductDetailForm from "@/components/Products/ProductDetailForm";
import ProductHeader from "@/components/Products/ProductHeader";
import Link from "next/link";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/store";

type IProps = {
  slug: string | string[] | undefined;
};
export default function ProductUpdate({ slug }: IProps) {
  const { product } = useGlobalContext();
  useEffect(() => {
    console.log("product: ", product);
  }, []);
  return (
    <>
      <ProductHeader name={product.title} />
      <ProductDetailForm disabled={false}>
        <div className="col-span-2 mt-5">
          <button className="mx-2 w-60 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold    rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
            Guardar
          </button>
          <Link href={`/detalle/${product.id}`}>
            <button className="mx-2 w-60  border-2 border-blue-400 float-right text-blue-50 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-semibold   rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
              Cancelar
            </button>
          </Link>
        </div>
      </ProductDetailForm>
    </>
  );
}
