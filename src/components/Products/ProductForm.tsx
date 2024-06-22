"use client ";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IProduct } from "../../context/store";
import ProductSchema from "../../schema/ProductSchema";

type IProps = {
  submitRef: any;
  product?: IProduct;
  categories: string[];
  disabled?: boolean;
  onSubmit: (data: any) => void;
};
export default function ProductsForm({
  disabled = false,
  submitRef,
  product,
  categories,
  onSubmit,
}: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductSchema),
    defaultValues: product ? product : {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="col-span-2 lg:col-span-1">
        <div className="flex flex-col mb-4 mr-3">
          <label htmlFor="title" className="text-blue-50 font-semibold mb-2">
            Nombre*
          </label>
          <input
            disabled={disabled ?? false}
            {...register("title")}
            type="text"
            id="title"
            name="title"
            className=" text-gray-500  shadow rounded-xl border-2 border-blue-50 disabled:border-gray-400 p-2  focus-visible:outline-none  focus-visible:border-blue-50"
          />

          <span className="text-red-500 text-sm">
            {errors?.title?.message ?? " "}
          </span>
        </div>
        <div className="flex flex-col mb-6 mr-3">
          <label htmlFor="category" className="text-blue-50 font-semibold mb-2">
            Categoria*
          </label>
          <select
            disabled={disabled ?? false}
            {...register("category")}
            defaultValue={product?.category ?? ""}
            id="category"
            name="category"
            className="text-gray-500 disabled:text-white bg-white disabled:bg-gray-400 shadow rounded-xl border-2 border-blue-50 p-2 disabled:border-gray-400  focus-visible:outline-none  focus-visible:border-blue-50">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4 mr-3">
          <label
            htmlFor="description"
            className="text-blue-50 font-semibold mb-2">
            Description*
          </label>
          <textarea
            disabled={disabled ?? false}
            {...register("description")}
            id="description"
            name="description"
            rows={4}
            className="text-gray-500  shadow rounded-xl border-2 border-blue-50 disabled:border-gray-400 p-2  focus-visible:outline-none  focus-visible:border-blue-50"
          />

          <span className="text-red-500 text-sm">
            {errors?.description?.message ?? " "}
          </span>
        </div>

        <div className="flex flex-col mb-4 ml-3">
          <label
            htmlFor="price"
            className="text-blue-50 font-semibold mb-2 -ml-3">
            Tarifa base
          </label>
          <div className="flex items-center">
            <span className="relative text-gray-900 -mr-5 z-10">$</span>
            <input
              {...register("price")}
              disabled={disabled ?? false}
              type="number"
              id="price"
              name="price"
              step={0.01}
              className="w-full text-gray-500  shadow rounded-xl border-2 border-blue-50 disabled:border-gray-400 py-2 pr-1 pl-7  focus-visible:outline-none  focus-visible:border-blue-50"
            />
          </div>

          <span className="text-red-500 text-sm">
            {errors?.price?.message ?? " "}
          </span>
        </div>
      </div>
      <button ref={submitRef} type="submit" className="invisible" />
    </form>
  );
}
