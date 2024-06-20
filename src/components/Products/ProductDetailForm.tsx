import ProductsForm from "@/components/Products/ProductForm";
import ProductFormImage from "@/components/Products/ProductFormImage";

export default function ProductDetailForm() {
  return (
    <section className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 align-middle  ">
      <ProductsForm disabled={true} />
      <ProductFormImage />
      <div className="col-span-2 mt-5">
        <button className="mx-2 w-60 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold    rounded-full  px-5 py-2.5  mb-2 shadow-sm disabled:opacity-50 cursor-not-allowed">
          Editar
        </button>
        <button className="mx-2  w-60  float-right text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-semibold    rounded-full  px-5 py-2.5  mb-2 shadow-sm disabled:opacity-50 cursor-not-allowed">
          Eliminar
        </button>
        <button className="mx-2 w-60  border-2 border-blue-400 float-right text-blue-50 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-semibold   rounded-full  px-5 py-2.5  mb-2 shadow-sm disabled:opacity-50 cursor-not-allowed">
          Volver
        </button>
      </div>
    </section>
  );
}
600;
