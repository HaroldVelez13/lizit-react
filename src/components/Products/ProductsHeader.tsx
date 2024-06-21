"use client";
import ProductsCreate from "@/components/Products/ProductsCreate";
import ButtonBase from "@/components/base/ButtonBase";
import { useState } from "react";
import addProduct from "../../../public/add_product.svg";
import Lizit from "../../../public/lizit.svg";
import { IProduct, useGlobalContext } from "../../context/store";

export default function ProductsHeader() {
  const { setProduct } = useGlobalContext();
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const handleOpen = (open: boolean) => setOpenCreate(open);
  const handleOpenFrom = () => {
    setProduct({} as IProduct);
    setOpenCreate(true);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ProductsCreate isOpen={openCreate} setIsOpen={handleOpen} />
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
