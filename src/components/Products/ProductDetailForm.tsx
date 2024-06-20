import ProductDetailImage from "@/components/Products/ProductDetailImage";
import ProductsForm from "@/components/Products/ProductForm";

type IProps = {
  disabled?: boolean;
  children: JSX.Element;
};
export default function ProductDetailForm({
  children,
  disabled = false,
}: IProps) {
  return (
    <section className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 align-middle  ">
      <ProductsForm disabled={disabled} />
      <ProductDetailImage />
      {children}
    </section>
  );
}
600;
