"use client";

import ProductsCreate from "@/components/Products/ProductsList/ProductsCreate";
import ButtonBase from "@/components/base/ButtonBase";
import { IProduct, useGlobalContext } from "@/context/store";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import addProduct from "/public/add_product.svg";
import Lizit from "/public/lizit.svg";

export default function ProductsHeader() {
  const { setProduct } = useGlobalContext();
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const handleOpen = (open: boolean) => setOpenCreate(open);
  const handleOpenFrom = () => {
    setProduct({} as IProduct);
    setOpenCreate(true);
  };

  const handleCreate = () => {
    handleOpen(false);
    toast.success(`Producto Creado con exito!`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Toaster position="top-center" reverseOrder={false} />
      <ProductsCreate
        isOpen={openCreate}
        handleCreate={handleCreate}
        setIsOpen={handleOpen}
      />
      <div className=" flex justify-center md:justify-start m-3 md:m-0">
        <ButtonBase
          text="Nuevo Producto"
          icon={addProduct}
          onClick={handleOpenFrom}
        />
      </div>
      <div className=" flex justify-center md:justify-end order-first md:order-last">
        <img src={Lizit.src} alt="Lizit Icon" className="w-16 my-5 md:my-0" />
      </div>
    </div>
  );
}
