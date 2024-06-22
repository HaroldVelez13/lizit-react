"use client";

import ProductDetailImage from "@/components/Products/ProductsDetail/ProductDetailImage";
import ProductDelete from "@/components/Products/common/ProductDelete";
import ProductsForm from "@/components/Products/common/ProductForm";
import { IProduct, useGlobalContext } from "@/context/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type IProps = {
  disabled?: boolean;
};
export default function ProductDetailForm({ disabled = false }: IProps) {
  const { product, categories, products, setProducts, setProduct } =
    useGlobalContext();
  const [ipsOpen, setIsOpen] = useState<boolean>(false);
  const submitRef = useRef<HTMLInputElement>();
  const router = useRouter();
  const onSubmit = (data: any) => null;

  const confirm = () => {
    setIsOpen(false);
    const _products = [...products].filter((prod) => prod.id !== product.id);
    setProduct({} as IProduct);
    setProducts(_products);
    router.push("/");
  };

  return (
    <section className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 align-middle  ">
      <ProductDelete
        title={product.title}
        isOpen={ipsOpen}
        setIsOpen={setIsOpen}
        confirm={confirm}
      />
      <ProductsForm
        disabled={disabled}
        categories={categories}
        product={product}
        submitRef={submitRef}
        onSubmit={onSubmit}
      />
      <ProductDetailImage
        images={product.images ?? [product.image]}
        image={product.image}
      />
      <div className="col-span-2 mt-5">
        <Link href={`/editar/${product.id}`}>
          <button className="mx-2 w-60 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold    rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
            Editar
          </button>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="mx-2  w-60  float-right text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-semibold    rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
          Eliminar
        </button>
        <Link href="/">
          <button className="mx-2 w-60  border-2 border-blue-400 float-right text-blue-50 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-semibold   rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
            Volver
          </button>
        </Link>
      </div>
    </section>
  );
}
600;
