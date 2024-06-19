import ButtonBase from "@/components/base/ButtonBase";

export default function ProductsForm() {
  const categorias = [
    { value: "cat1", label: "Categoria 1" },
    { value: "cat2", label: "Categoria 2" },
  ];

  return (
    <form className="max-w-7xl  mx-auto grid grid-cols-2 gap-4">
      <div className="col-span-2 lg:col-span-1">
        <div className="flex flex-col mb-6 mr-3">
          <label htmlFor="nombre" className="text-blue-50 font-semibold mb-2">
            Nombre*
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className=" text-gray-500  shadow rounded-xl border-2 border-blue-50 py-2 px-1  focus-visible:outline-none  focus-visible:border-blue-50"
          />
        </div>
        <div className="flex flex-col mb-6 mr-3">
          <label
            htmlFor="categoria"
            className="text-blue-50 font-semibold mb-2">
            Categoria*
          </label>
          <select
            id="categoria"
            name="categoria"
            className="text-gray-500  bg-white shadow rounded-xl border-2 border-blue-50 py-2 px-1  focus-visible:outline-none  focus-visible:border-blue-50">
            {categorias.map((categoria) => (
              <option key={categoria.value} value={categoria.value}>
                {categoria.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-6 mr-3">
          <label
            htmlFor="description"
            className="text-blue-50 font-semibold mb-2">
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="text-gray-500  shadow rounded-xl border-2 border-blue-50 py-2 px-1  focus-visible:outline-none  focus-visible:border-blue-50"
          />
        </div>

        <div className="flex flex-col mb-6 ml-3">
          <label
            htmlFor="tarifa_base"
            className="text-blue-50 font-semibold mb-2 -ml-3">
            Tarifa base
          </label>
          <div className="flex items-center">
            <span className="relative text-gray-900 -mr-5 z-10">$</span>
            <input
              type="number"
              id="tarifa_base"
              name="tarifa_base"
              className="w-full text-gray-500  shadow rounded-xl border-2 border-blue-50 py-2 pr-1 pl-7  focus-visible:outline-none  focus-visible:border-blue-50"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 bg-blue-100 rounded-lg items-center justify-center p-7">
        <div className="flex flex-col ">
          <div className="mb-6">
            <h2 className="text-blue-500 font-semibold">Imágenes</h2>
            <p className="text-sm text-gray-600">
              Añada los links de las imágenes relacionadas al producto.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-9 flex flex-col">
                <input
                  type="text"
                  className=" text-gray-500  shadow rounded-xl border-2 border-blue-50 py-2 px-1  focus-visible:outline-none  focus-visible:border-blue-50"
                />
              </div>
              <div className="col-span-12 sm:col-span-3 flex flex-col text-sm my-auto">
                <ButtonBase text="Agregar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-1 md:col-start-2 px-5">
        <button
          type="submit"
          className="w-4/6  float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 shadow-sm disabled:opacity-50 cursor-not-allowed">
          Guardar
        </button>
      </div>
    </form>
  );
}
