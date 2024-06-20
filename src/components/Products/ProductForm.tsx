type IProps = {
  disabled?: boolean;
};
export default function ProductsForm({ disabled = false }: IProps) {
  const categorias = [
    { value: "cat1", label: "Categoria 1" },
    { value: "cat2", label: "Categoria 2" },
  ];

  return (
    <form>
      <div className="col-span-2 lg:col-span-1">
        <div className="flex flex-col mb-6 mr-3">
          <label htmlFor="nombre" className="text-blue-50 font-semibold mb-2">
            Nombre*
          </label>
          <input
            disabled={disabled ?? false}
            type="text"
            id="nombre"
            name="nombre"
            className=" text-gray-500  shadow rounded-xl border-2 border-blue-50 disabled:border-gray-400 p-2  focus-visible:outline-none  focus-visible:border-blue-50"
          />
        </div>
        <div className="flex flex-col mb-6 mr-3">
          <label
            htmlFor="categoria"
            className="text-blue-50 font-semibold mb-2">
            Categoria*
          </label>
          <select
            disabled={disabled ?? false}
            id="categoria"
            name="categoria"
            className="text-gray-500 disabled:text-white bg-white disabled:bg-gray-400 shadow rounded-xl border-2 border-blue-50 p-2 disabled:border-gray-400  focus-visible:outline-none  focus-visible:border-blue-50">
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
            disabled={disabled ?? false}
            id="description"
            name="description"
            rows={4}
            className="text-gray-500  shadow rounded-xl border-2 border-blue-50 disabled:border-gray-400 p-2  focus-visible:outline-none  focus-visible:border-blue-50"
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
              disabled={disabled ?? false}
              type="number"
              id="tarifa_base"
              name="tarifa_base"
              className="w-full text-gray-500  shadow rounded-xl border-2 border-blue-50 disabled:border-gray-400 py-2 pr-1 pl-7  focus-visible:outline-none  focus-visible:border-blue-50"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
