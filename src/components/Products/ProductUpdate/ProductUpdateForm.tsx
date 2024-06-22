"use client";

import ProductDetailImage from "@/components/Products/ProductsDetail/ProductDetailImage";
import ProductsForm from "@/components/Products/common/ProductForm";
import { IProduct, useGlobalContext } from "@/context/store";
import Link from "next/link";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

type IProps = {
  disabled?: boolean;
};
export default function ProductUpdateForm({ disabled = false }: IProps) {
  const { product, categories, products, setProducts, setProduct } =
    useGlobalContext();
  const submitRef = useRef<HTMLInputElement>();
  const onSubmit = (data: any) => {
    const _product: IProduct = {
      product,
      ...data,
    };
    const new_products = products.map((prod) => {
      if (prod.id == product.id) {
        return _product;
      } else {
        return prod;
      }
    });
    setProducts(new_products);
    setProduct(_product);
    toast.success(`${_product.title} Editado con exito!`);
  };
  return (
    <section className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 align-middle  ">
      <Toaster position="top-center" reverseOrder={false} />
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
        <button
          onClick={() => submitRef?.current?.click()}
          className="mx-2 w-60 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold    rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
          Guardar
        </button>
        <Link href={`/detalle/${product.id}`}>
          <button className="mx-2 w-60  border-2 border-blue-400 float-right text-blue-50 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-semibold   rounded-full  px-5 py-2.5  mb-2 shadow-sm  ">
            Cancelar
          </button>
        </Link>
      </div>
    </section>
  );
}
600;
