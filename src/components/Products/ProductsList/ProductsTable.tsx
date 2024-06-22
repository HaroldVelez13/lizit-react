"use client";
import ProductDelete from "@/components/Products/common/ProductDelete";
import ButtonBase from "@/components/base/ButtonBase";
import FabButton from "@/components/base/FabButton";
import { IProduct, useGlobalContext } from "@/context/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import deleteIcon from "/public/delete.svg";
import updateIcon from "/public/update.svg";

export default function ProductsTable() {
  const { setProduct, products, productsFilter, setProducts } =
    useGlobalContext();
  const [_product, _setProduct] = useState<IProduct>({} as IProduct);
  const [ipsOpen, setIsOpen] = useState<boolean>(false);
  const [prodcutsList, setPorductsList] = useState<IProduct[]>([]);

  const handleShow = (product: IProduct) => {
    setProduct(product);
  };
  const handleDelete = (product: IProduct) => {
    _setProduct(product);
    setIsOpen(true);
  };
  const confirm = () => {
    const _products = [...products].filter((prod) => prod.id !== _product.id);
    setProduct({} as IProduct);
    setProducts(_products);
    setIsOpen(false);
    toast.success(`${_product.title} Eliminado con exito!`);
  };
  useEffect(() => {
    if (productsFilter.length) {
      setPorductsList(productsFilter);
    } else {
      setPorductsList(products);
    }
  }, [productsFilter, products]);
  return (
    <div className="bg-white  w-full border rounded-2xl    px-3">
      <Toaster position="top-center" reverseOrder={false} />
      <ProductDelete
        title={_product.title}
        isOpen={ipsOpen}
        setIsOpen={setIsOpen}
        confirm={confirm}
      />
      <table className="table-auto w-full text-sm lg:text-base">
        <thead>
          <tr className=" text-blue-500 text-left font-bold  border-b-2">
            <th className=" my-auto px-2 py-4 w-0 sm:w-2/12 hidden sm:block">
              Foto
            </th>
            <th className=" my-auto px-2 py-4 w-3/12 sm:w-2/12 ">Nombre</th>
            <th className=" my-auto px-2 py-4 w-2/12 ">Categoría</th>
            <th className=" my-auto px-2 py-4 w-0 sm:w-2/12 hidden sm:block">
              Descripción
            </th>
            <th className=" my-auto px-2 py-4 w-4/12 sm:w-2/12">Tarifa Base</th>
            <th className=" my-auto px-2 py-4 w-3/12 sm:w-3/12"></th>
          </tr>
        </thead>
        <tbody>
          {prodcutsList.map((product) => (
            <tr key={product.id + product.title}>
              <td className="p-2 hidden sm:block">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover rounded-xl"
                />
              </td>
              <td className="p-2  ">{product.title}</td>
              <td className="p-2  ">{product.category}</td>
              <td className="p-2  hidden sm:block ">
                {product.description.slice(0, 40) + "..."}
              </td>
              <td className="p-2 ">${product.price}</td>
              <td className="py-2 px-1 flex items-center justify-around py-auto">
                <Link
                  href={`/detalle/${product.id}`}
                  className="flex my-auto"
                  onClick={() => handleShow(product)}>
                  <ButtonBase text="Ver" />
                </Link>
                <Link
                  href={`/editar/${product.id}`}
                  className="flex my-auto"
                  onClick={() => handleShow(product)}>
                  <FabButton icon={updateIcon} />
                </Link>
                <FabButton
                  icon={deleteIcon}
                  onClick={() => handleDelete(product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
