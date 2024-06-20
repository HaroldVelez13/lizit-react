import ProductDetailForm from "@/components/Products/ProductDetailForm";
import ProductHeader from "@/components/Products/ProductHeader";

type IProps = {
  slug: string | string[] | undefined;
};
export default function ProductDetail({ slug }: IProps) {
  return (
    <>
      <ProductHeader name="hola" />
      <ProductDetailForm />
    </>
  );
}
