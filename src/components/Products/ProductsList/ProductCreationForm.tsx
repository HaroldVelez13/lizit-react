"use client";

import ProductFormImage from "@/components/Products/ProductsList/ProductFormImage";
import ProductsForm from "@/components/Products/common/ProductForm";
import { IProduct, useGlobalContext } from "@/context/store";
import { useRef, useState } from "react";

type IProps = {
  handleCreate: () => void;
};
export default function ProductCreationForm({ handleCreate }: IProps) {
  const submitRef = useRef<HTMLInputElement>();
  const { product, categories, products, setProducts } = useGlobalContext();
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");

  function randomId() {
    return Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000;
  }
  const onSubmit = (data: any) => {
    const _product: IProduct = {
      id: randomId(),
      image: image,
      images: images,
      ...data,
    };
    setProducts([...products, _product]);
    handleCreate();
  };
  const handleAddImage = (img: string) => {
    if (images.length === 0) {
      setImage(img);
    }
    const _images = [...images, img];
    setImages(_images);
  };
  return (
    <section className="max-w-7xl  mx-auto grid grid-cols-2 gap-4">
      <ProductsForm
        submitRef={submitRef}
        product={product}
        categories={categories}
        onSubmit={onSubmit}
      />
      <ProductFormImage
        image={image}
        images={images}
        handleAddImage={handleAddImage}
        setImage={setImage}
      />
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
