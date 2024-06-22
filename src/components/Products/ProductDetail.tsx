"use client";
import ProductDetailForm from "@/components/Products/ProductDetailForm";
import ProductHeader from "@/components/Products/ProductHeader";

import Skeleton from "@/components/base/Skeleton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/store";

type IProps = {
  slug: string | string[] | undefined;
};
export default function ProductDetail({ slug }: IProps) {
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
        <ProductDetailForm disabled={true} />
      </>
    );
  } else {
    return <Skeleton />;
  }
}
