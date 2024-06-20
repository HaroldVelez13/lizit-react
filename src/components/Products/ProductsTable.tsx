import ButtonBase from "@/components/base/ButtonBase";
import FabButton from "@/components/base/FabButton";
import Link from "next/link";
import deleteIcon from "../../../public/delete.svg";
import updateIcon from "../../../public/update.svg";
import { IProduct, useGlobalContext } from "../../context/store";

const data = [
  {
    foto: "Imagen", // Replace with an image path or URL if available
    nombre: 'Sierra Circular 7 1/4"',
    categoria: "Electric",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur. Nibh lacus non in amet pulvinar lectus aliquet tincidunt.",
    tarifaBase: "$60.000",
    ver: "Ver",
  },
  // Add more objects following the same structure for other table rows
];

type IProps = {
  products: IProduct[];
};

export default function ProductsTable({ products }: IProps) {
  const { setProduct } = useGlobalContext();
  const handleShow = (product: IProduct) => {
    setProduct(product);
  };
  return (
    <div className="bg-white  w-full border rounded-2xl    px-3">
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
          {products.map((product) => (
            <tr key={product.id}>
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
                <FabButton icon={deleteIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
