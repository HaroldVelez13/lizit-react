import ButtonBase from "@/components/base/ButtonBase";

export default function ProductFormImage() {
  return (
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
                className=" text-gray-500  shadow rounded-xl border-2 border-blue-50 p-2   focus-visible:outline-none  focus-visible:border-blue-50"
              />
            </div>
            <div className="col-span-12 sm:col-span-3 flex flex-col text-sm my-auto">
              <ButtonBase text="Agregar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
