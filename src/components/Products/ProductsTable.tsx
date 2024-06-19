import ButtonBase from "@/components/base/ButtonBase";
import FabButton from "@/components/base/FabButton";
import deleteIcon from "../../../public/delete.svg";
import updateIcon from "../../../public/update.svg";

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

export default function ProductsTable() {
  return (
    <div className="bg-white  w-full border rounded-2xl   text-sm lg:text-base px-3">
      <table className="table-auto w-full ">
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
          {data.map((item) => (
            <tr key={item.nombre}>
              <td className="p-2 hidden sm:block">
                <img
                  src={item.foto}
                  alt={item.nombre}
                  className="w-10 h-10 object-cover "
                />
              </td>
              <td className="p-2  ">{item.nombre}</td>
              <td className="p-2  ">{item.categoria}</td>
              <td className="p-2  hidden sm:block ">
                {item.descripcion.slice(0, 40) + "..."}
              </td>
              <td className="p-2 ">{item.tarifaBase}</td>
              <td className="py-2 px-1 flex items-center justify-around py-auto">
                <ButtonBase text="Ver" />
                <FabButton icon={updateIcon} />
                <FabButton icon={deleteIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
