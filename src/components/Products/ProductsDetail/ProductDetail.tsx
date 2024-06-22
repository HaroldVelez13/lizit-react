"use client";

import ProductDetailForm from "@/components/Products/ProductsDetail/ProductDetailForm";
import ProductHeader from "@/components/Products/common/ProductHeader";
import Skeleton from "@/components/base/Skeleton";
import { useGlobalContext } from "@/context/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
