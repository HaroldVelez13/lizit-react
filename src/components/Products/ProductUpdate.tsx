"use client";
import ProductHeader from "@/components/Products/ProductHeader";
import ProductUpdateForm from "@/components/Products/ProductUpdateForm";
import Skeleton from "@/components/base/Skeleton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/store";

type IProps = {
  slug: string | string[] | undefined;
};
export default function ProductUpdate({ slug }: IProps) {
  const { product } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    const validate = slug == product?.id?.toString();
    if (!validate) {
      router.push("/");
    }
  }, [product]);

  if (product?.id) {
    return (
      <>
        <ProductHeader name={product.title} />
        <ProductUpdateForm disabled={false} />
      </>
    );
  } else {
    return <Skeleton />;
  }
}
