"use client";
import ProductsForm from "@/components/Products/ProductForm";
import ProductFormImage from "@/components/Products/ProductFormImage";
import { useRef } from "react";

export default function ProductCreationForm() {
  const submitRef = useRef<HTMLInputElement>();
  return (
    <section className="max-w-7xl  mx-auto grid grid-cols-2 gap-4">
      <ProductsForm submitRef={submitRef} />
      <ProductFormImage />
      <div className="col-start-1 md:col-start-2 pl-5">
        <button
          onClick={() => submitRef?.current?.click()}
          className="w-4/6  float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 shadow-sm disabled:opacity-50 ">
          Guardar
        </button>
      </div>
    </section>
  );
}
